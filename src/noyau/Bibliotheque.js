class Bibliotheque {
    constructor() {
        this.listesLecture = [];
    }

    creerListe(nom) {
        let liste = new ListeLecture(nom);
        this.listesLecture.push(liste);
    }

    supprimerListe(liste) {
        const index = this.listesLecture.indexOf(chanson);
        
        if (index !== -1) {
            this.listesLecture.splice(index, 1);
        }
    }

    // TODO: MOdifier order des listes 
}