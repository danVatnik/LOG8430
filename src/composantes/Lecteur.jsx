export default class Lecteur extends React.Component {
    render() {
        let { chanson } = this.props;

        let html = (<div></div>);
        if (chanson != null) {
            html = (
                <div dangerouslySetInnerHTML={{__html:chanson.iframeHtml}}></div>
            );
        }
        return html;
    }
}