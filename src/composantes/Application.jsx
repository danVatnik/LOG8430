import Recherche from './Recherche.jsx';

export default class Application extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col panneau" style={{"backgroundColor": "#e3f2fd"}}>Bibliothèque</div>
                        <Recherche />
                    </div>
                </div>

                <div className="container-fluid bg-primary">[Lecteur]</div>
            </div>
        );
    }
}
