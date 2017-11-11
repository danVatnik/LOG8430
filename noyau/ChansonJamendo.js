import Chanson from './Chanson.js';

export default class ChansonJamendo extends Chanson {
    constructor(titre, duree, audioURL) {
        super(titre, duree);
        this.iframeHtml = "<audio controls><source src='" + audioURL + "' type='audio/mpeg'>Your browser does not support the audio element.</audio>"
    }
}