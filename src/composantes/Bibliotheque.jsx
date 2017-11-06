import ComposantListeLecture from './ListeLecture.jsx';

export default class Bibliotheque extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomNouvelleListe: "",
            listesLecture: props.bibliotheque.listesLecture
        };
    }

    gererChangementNomNouvelleListe(evenement) {
        this.setState({ nomNouvelleListe: evenement.target.value });
    }

    creerListeLecture() {
        this.props.bibliotheque.creerListe(this.state.nomNouvelleListe);
        this.setState({
            nomNouvelleListe: "",
            listesLecture: this.props.bibliotheque.listesLecture
        });
    }

    supprimerListeLecture(listeLecture) {
        this.props.bibliotheque.supprimerListe(listeLecture);
        this.setState({ listesLecture: this.props.bibliotheque.listesLecture });
    }

    render() {
        let listesLecture = this.state.listesLecture;

        let listesLectureHtml = (
            <p className="liste-vide">Votre bibliothèque est vide! Commencez par créer une nouvelle liste de lecture.</p>
        );
        if (listesLecture.length > 0) {
            listesLectureHtml = listesLecture.map((listeLecture, index) => (
                <ComposantListeLecture key={index} listeLecture={listeLecture} supprimer={this.supprimerListeLecture.bind(this, listeLecture)} />
            ));
        }

        return (
            <div className="col panneau" style={{"backgroundColor": "#e3f2fd"}}>
                <div className="titre-bibliotheque">
                    <h1>Bibliothèque</h1>
                    <form onSubmit={this.creerListeLecture.bind(this)}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Nouvelle liste..." value={this.state.nomNouvelleListe} onChange={this.gererChangementNomNouvelleListe.bind(this)} />
                            <span className="input-group-btn">
                                <button className="btn btn-success" type="submit" disabled={this.state.nomNouvelleListe.length == 0}><i className="fa fa-plus"></i></button>
                            </span>
                        </div>
                    </form>
                </div>

                {listesLectureHtml}
            </div>
        );
    }
}