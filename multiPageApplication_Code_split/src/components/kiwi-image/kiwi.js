import Kiwi from './fly.jpg';
import './Kiwi.scss';

class KiwiImage {
    render( ) {
        const img = document.createElement( 'img' );
        img.src = Kiwi;
        const body = document.querySelector( 'body' );
        body.appendChild( img );
    }
}

export default KiwiImage;