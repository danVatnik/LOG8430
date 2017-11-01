import React from 'react';
import ReactDom from 'react-dom';

import ComposanteApplication from './composantes/Application.jsx';

export default class Application {
    constructor() {
        this.services = [];
    }

    executer() {
        ReactDOM.render(
            <ComposanteApplication />,
            document.getElementById("app")
        );
    }
}