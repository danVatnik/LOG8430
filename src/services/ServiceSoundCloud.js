import Service from './Service.js';
import ChansonSoundCloud from './../noyau/ChansonSoundCloud.js';

export default class ServiceSoundCloud extends Service {
    constructor() {
        super();
        SC.initialize({
            client_id: 'f4323c6f7c0cd73d2d786a2b1cdae80c'
          });
    }

    chercher(requete) {
        let self = this;
        return SC.get('/tracks', {
            q: requete
          }).then(function(chansons) {
              return chansons.map(self.construireChanson)
          });
    }

    construireChanson(chansonJson) {
        let duree  = chansonJson.duration / 1000;

        return new ChansonSoundCloud(chansonJson.title, duree);
    }
}