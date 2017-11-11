import { formaterDuree } from './../noyau/utils.js';

export default class Chanson extends React.Component {
    jouer(chanson) {
        this.props.jouer(chanson);
    }

    supprimer(chanson) {
        this.props.supprimer(chanson);
    }

    render() {
        let chanson = this.props.chanson;

        return (
            <li data-id={this.props.index} className="chanson">
                <div className="liste">
                    <span className="icone-gauche"><button type="button" className="btn btn-success btn-sm" onClick={this.jouer.bind(this, chanson)}><i className="fa fa-play"></i></button></span>
                    <span className="contenu">{chanson.titre} <span className="duree">({formaterDuree(chanson.duree)})</span></span>
                    <span className="icone-droite"><a href="#" onClick={this.supprimer.bind(this, chanson)}><i className="fa fa-trash text-danger"></i></a></span>
                </div>
            </li>
        );
    }
}