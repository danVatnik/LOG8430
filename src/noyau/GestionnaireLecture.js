class GestionnaireLecture {
    constructor() {
        this.lecteur = new Lecteur();
    }

    jouerChansons(chansons) {
        chansons.forEach(function(chanson) {
            this.lecteur.joueur(chanson);
        }, this);
    }
}