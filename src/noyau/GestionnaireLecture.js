class GestionnaireLecture {
    constructor() {
        //this.lecteur = new Lecteur();
    }

    jouerChansons(chansons) {
        chansons.forEach(function(chanson) {
            chanson.obtenirMusique();
        }, this);
    }
}