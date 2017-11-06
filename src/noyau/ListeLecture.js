export default class ListeLecture {
    constructor(nom) {
        this.nom = nom;
        this.chansons = [];
    }

    ajouterChanson(chanson) {
        this.chansons.push(chanson);
    }

    supprimerChanson(chanson) {
        const index = this.chansons.indexOf(chanson);

        if (index !== -1) {
            this.chansons.splice(index, 1);
        }
    }

    // TODO: modifier order des chansons
}