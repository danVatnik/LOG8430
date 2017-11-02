import Service from './Service.js';
import ChansonDeezer from './../noyau/ChansonDeezer.js';

export default class ServiceDeezer extends Service {
    constructor() {
        super();
        DZ.init({
            appId  : '5051c17c7f3b1c8f486750e5d6e66349',
            channelUrl : 'http://localhost/index.html'
        });
    }

    chercher(requete) {
        let self = this;
        return new Promise(function(resolve, reject){
            DZ.api('search', 'GET', {q : requete}, function(chansons){
                resolve(Promise.all(chansons.data.map(self.construireChanson)));
            });
        });

    }

    construireChanson(chansonJson) {
        //console.log(chansonJson);
        let titre = chansonJson.artist.name + " - " + chansonJson.title;
        
        return $.ajax({
            type: "get",
            url: "https://cors-anywhere.herokuapp.com/https://api.deezer.com/oembed?url=http://www.deezer.com/track/" + chansonJson.id,
        }).then(function(res){
            return new ChansonDeezer(titre, chansonJson.duration, res.html);
        }); 
    }
}