import Service from './Service.js';
import ChansonSpotify from './../noyau/ChansonSpotify.js';

export default class ServiceSpotify extends Service {
    constructor() {
        super();
        let self = this;
        $.ajax(
            {
                method: "POST",
                url: "https://cors-anywhere.herokuapp.com/https://accounts.spotify.com/api/token",
                data:{
                    "grant_type": "client_credentials",
                },
                cors: true ,
                contentType:'application/x-www-form-urlencoded',
                headers: {
                    "Authorization":  "Basic " + btoa("d25dbaca45c7415f94f5b0994c05b8ff" + ":" + "c099d5e3e56d4cd9a1547d7b6284125c"),
                },
                success: function(result){
                    self.token = result.access_token;
                }
            }
        );
    }

    chercher(requete) {
        let self = this;
        if(this.token != null){
            return $.ajax(
                {
                    method: "GET",
                    url: "https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search",
                    data:{
                        "q": requete,
                        "type": "track"
                    },
                    cors: true ,
                    contentType:'application/json',
                    headers: {
                        "Authorization": "Bearer " + this.token
                    },
                    success: function(result){
                    }
                }
            ).then(function(chansons) {
                return chansons.tracks.items.map(self.construireChanson);
            });
        }
        return Promise.resolve({});
    }

    construireChanson(chansonJson) {
        let duree = chansonJson.duration_ms / 1000;
        let titre = chansonJson.name + " - " + chansonJson.artists[0].name
        let iframeHtml = "<iframe src='https://open.spotify.com/embed?uri=spotify:track:"+ chansonJson.id +"' width='300' height='80' frameborder='0' allowtransparency='true'></iframe>"
        return new ChansonSpotify(titre, duree, iframeHtml);
    }
}