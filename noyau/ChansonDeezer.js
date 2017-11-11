import Chanson from './Chanson.js';

export default class ChansonDeezer extends Chanson {
    constructor(titre, duree, iframeHtml) {
        super(titre, duree);
        this.iframeHtml = iframeHtml; 
    }
}