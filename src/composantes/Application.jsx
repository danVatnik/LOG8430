import Bibliotheque from './Bibliotheque.jsx';
import Recherche from './Recherche.jsx';
import Lecteur from './Lecteur.jsx';

export default class Application extends React.Component {

    constructor(props) {
        super(props);
        this.state = {chanson:null};
    }

    jouer(chanson) {
        this.setState({chanson:chanson});
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <Bibliotheque bibliotheque={this.props.app.obtenirBibliotheque()} />
                        <Recherche gestionnaireRecherche={this.props.app.obtenirGestionnaireRecherche()} jouer={this.jouer.bind(this)} />
                    </div>
                </div>

                <Lecteur chanson={this.state.chanson}/>

            </div>
        );
    }
}
