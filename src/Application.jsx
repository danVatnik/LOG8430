import React from 'react';
import ReactDom from 'react-dom';

import ComposanteApplication from './composantes/Application.jsx';

import ServiceDeezer from './services/ServiceDeezer.js';
import ServiceSoundCloud from './services/ServiceSoundCloud.js';
import ServiceSpotify from './services/ServiceSpotify.js';

import GestionnaireRecherche from './noyau/GestionnaireRecherche.js';

export default class Application {
    constructor() {
        this.services = [
            new ServiceDeezer(),
            //new ServiceSoundCloud()
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