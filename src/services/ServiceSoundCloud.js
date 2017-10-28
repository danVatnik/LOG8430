class ServiceSoundCloud extends Service {
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
        let infoChanson = chansonJson.title.split(" - ");
        let artiste = infoChanson[0];
        let titre = infoChanson[1];

        let duree  = chansonJson.duration / 1000;

        return new ChansonSoundCloud(titre, artiste, duree);
    }
}