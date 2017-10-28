class GestionnaireRecherche {
    constructor(services) {
        this.services = services;
    }

    chercher(requete){
        let chansons = this.services.reduce(function(liste, service) {
            return liste.concat(service.chercher(requete));
        }, []);
    }
}