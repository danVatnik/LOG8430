import React from 'react';
import ReactDom from 'react-dom';

import ComposanteApplication from './composantes/Application.jsx';

import ServiceDeezer from './services/ServiceDeezer.js';
import ServiceJamendo from './services/ServiceJamendo.js';
import ServiceSpotify from './services/ServiceSpotify.js';

import Chanson from './noyau/Chanson.js';
import Bibliotheque from './noyau/Bibliotheque.js';
import GestionnaireRecherche from './noyau/GestionnaireRecherche.js';

export default class Application {
    constructor() {
        this.services = [
            new ServiceDeezer(),
            new ServiceJamendo(),
            new ServiceSpotify()
        ];

        this.gestionnaireRecherche = new GestionnaireRecherche(this.services);
        this.bibliotheque = new Bibliotheque();
    }

    obtenirBibliotheque() {
        return this.bibliotheque;
    }

    obtenirGestionnaireRecherche() {
        return this.gestionnaireRecherche;
    }

    executer() {
        ReactDOM.render(
            <ComposanteApplication app={this} />,
            document.getElementById("app")
        );
    }
}