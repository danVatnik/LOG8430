import React from 'react';
import ReactDom from 'react-dom';

import ComposanteApplication from './composantes/Application.jsx';

import ServiceDeezer from './services/ServiceDeezer.js';
import ServiceJamendo from './services/ServiceJamendo.js';
import ServiceSpotify from './services/ServiceSpotify.js';

import GestionnaireRecherche from './noyau/GestionnaireRecherche.js';

export default class Application {
    constructor() {
        this.services = [
            new ServiceDeezer(),
            new ServiceJamendo(),
            new ServiceSpotify()
        ];

        this.gestionnaireRecherche = new GestionnaireRecherche(this.services);
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