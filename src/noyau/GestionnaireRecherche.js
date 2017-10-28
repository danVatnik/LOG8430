class GestionnaireRecherche {
    constructor(services) {
        this.services = services;
    }

    chercher(requete){

        return Promise.all(this.services.map(services => services.chercher(requete)))
        .then(function(listesResultats){
            return [].concat(...listesResultats);
        });
    }
}