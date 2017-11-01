function formaterDuree(duree) {
    let secondes = duree % 60;
    let minutes = Math.floor(duree / 60);

    return `${minutes}:${secondes.toString().padStart(2, "0")}`;
}

export default class ResultatsRecherche extends React.Component {
    render() {
        let { chansons } = this.props;

        let html;
        if (chansons.length == 0) {
            html = (
                <p className="liste-vide">Commencez votre recherche en entrant un terme ci-haut!</p>
            );
        }
        else {
            let resultats = this.props.chansons.map((chanson, index) => {
                return (
                    <tr key={index}>
                        <td><button type="button" className="btn btn-success btn-sm"><i className="fa fa-play"></i></button></td>
                        <td>{chanson.titre}</td>
                        <td>{formaterDuree(chanson.duree)}</td>
                    </tr>
                );
            });

            html = (
                <table className="resultats-recherche table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Titre</th>
                            <th>Durée</th>
                        </tr>
                    </thead>

                    <tbody>
                        {resultats}
                    </tbody>
                </table>
            );
        }

        return html;
    }
}