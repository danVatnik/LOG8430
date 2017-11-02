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
                //dataType: 'jsonp',
                cors: true ,
                contentType:'application/x-www-form-urlencoded',
                //secure: true,
                headers: {
                    //'Access-Control-Allow-Origin': '*',
                    "Authorization":  "Basic " + btoa("d25dbaca45c7415f94f5b0994c05b8ff" + ":" + "c099d5e3e56d4cd9a1547d7b6284125c"),
                },
                // beforeSend: function (xhr) {
                //     xhr.setRequestHeader ("Authorization: ", "Basic " + btoa("d25dbaca45c7415f94f5b0994c05b8ff" + ":" + "c099d5e3e56d4cd9a1547d7b6284125c"));
                //     //xhr.setRequestHeader ("Access-Control-Allow-Origin: *");
                // },
                success: function(result){
                    self.token = result.access_token;
                }
            }
        );
        
        //this.spotifyApi = new SpotifyWebApi();
        //this.spotifyApi.
        //this.spotifyApi.setAccessToken('c099d5e3e56d4cd9a1547d7b6284125c');
        //this.spotifyApi.setPromiseImplementation(Q);
    }

    chercher(requete) {
        let self = this;
        if(this.token != null){
            console.log(this.token)
            return $.ajax(
                {
                    method: "GET",
                    url: "https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/search",
                    data:{
                        "q": requete,
                        "type": "track" 
                    },
                    //dataType: 'jsonp',
                    cors: true ,
                    contentType:'application/json',
                    //secure: true,
                    headers: {
                        //'Access-Control-Allow-Origin': '*',
                        "Authorization": "Bearer " + this.token
                    },
                    // beforeSend: function (xhr) {
                    //     xhr.setRequestHeader ("Authorization: ", "Basic " + btoa("d25dbaca45c7415f94f5b0994c05b8ff" + ":" + "c099d5e3e56d4cd9a1547d7b6284125c"));
                    //     //xhr.setRequestHeader ("Access-Control-Allow-Origin: *");
                    // },
                    success: function(result){
                        console.log(result);
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
        let iframeHtml = "<iframe src='https://open.spotify.com/embed?uri=spotify:track:"+ chansonJson.id +"' width='300' height='200' frameborder='0' allowtransparency='true'></iframe>"
        return new ChansonSpotify(titre, duree, iframeHtml);
    }
}