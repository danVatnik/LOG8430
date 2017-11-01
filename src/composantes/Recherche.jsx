import ResultatsRecherche from './ResultatsRecherche.jsx';

export default class Recherche extends React.Component {
    render() {
        return (
            <div className="col panneau">
                <div className="input-group">
                    <input type="search" className="form-control" placeholder="Chercher de la musique..." />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit"><i className="fa fa-search"></i></button>
                    </span>
                </div>

                <ResultatsRecherche chansons={[new Chanson("Antoine", 125),new Chanson("Antoine", 110),new Chanson("Antoine", 60),new Chanson("Antoine", 45)]} />
                <ResultatsRecherche chansons={[]} />
            </div>
        );
    }
}