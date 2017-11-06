import Chanson from './../noyau/Chanson.js';

import ComposantChanson from './Chanson.jsx';

export default class ListeLecture extends React.Component {
    render() {
        let listeLecture = this.props.listeLecture;

        // let chansonsHtml = (
        //     <p className="liste-vide">Liste de lecture vide</p>
        // );
        let chansonsHtml;
        if (listeLecture.chansons.length > 0) {
            chansonsHtml = listeLecture.chansons.map((chanson, index) => (
                <ComposantChanson key={index} chanson={chanson} jouer={null} supprimer={null} />
            ));
        }

        return (
            <div className="liste-lecture">
                <div className="liste">
                    <span className="icone-gauche"><button type="button" className="btn btn-success btn-sm"><i className="fa fa-play"></i></button></span>
                    <span className="contenu">{listeLecture.nom}</span>
                    <span className="icone-droite"><a href="#" onClick={this.props.supprimer}><i className="fa fa-trash text-danger"></i></a></span>
                </div>
                <ul className="chansons">
                    {chansonsHtml}
                </ul>
            </div>
        );
    }
}