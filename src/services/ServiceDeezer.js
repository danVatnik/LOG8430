class ServiceDeezer extends Service {
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
                resolve(chansons.data.map(self.construireChanson));
            });
        });
        
    }

    construireChanson(chansonJson) {
        let titre = chansonJson.artist.name + " - " + chansonJson.title;

        return new ChansonDeezer(titre, chansonJson.duration);
    }
}