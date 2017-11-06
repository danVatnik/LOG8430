import Service from './Service.js';
import ChansonJamendo from './../noyau/ChansonJamendo.js';

export default class ServiceJamendo extends Service {
    constructor() {
        super();
    }

    chercher(requete) {
        let self = this;
        return $.ajax({
            type: "get",
            url: "https://api.jamendo.com/v3.0/tracks/?client_id=544a2f4b&search=" + requete,
        }).then(function(chansons) {
            return chansons.results.map(self.construireChanson);
        }); 
    }

    construireChanson(chansonJson) {
        let duree  = chansonJson.duration;
        let titre = chansonJson.name + " - " + chansonJson.artist_name;
        return new ChansonJamendo(titre, duree, chansonJson.audio);
    }
}