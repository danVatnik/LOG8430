export default class GestionnaireRecherche {
    constructor(services) {
        this.services = services;
    }

    chercher(requete) {
        let promessesServices = this.services.map(services => services.chercher(requete));
        return Promise.all(promessesServices)
            .then(listesResultats => [].concat(...listesResultats));
    }
}