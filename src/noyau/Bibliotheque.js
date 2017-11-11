import ListeLecture from './ListeLecture.js';

export default class Bibliotheque {
    constructor() {
        this.listesLecture = [];
    }

    creerListe(nom) {
        let liste = new ListeLecture(nom);
        this.listesLecture.push(liste);

        return liste;
    }

    changerListe(index, listeChansons) {
        this.listesLecture[index].chansons = listeChansons;
    }

    supprimerListe(liste) {
        const index = this.listesLecture.indexOf(liste);

        if (index !== -1) {
            this.listesLecture.splice(index, 1);
        }
    }
}