import KiwiImage from '../src/assets/fly.jpg';
import AltText from './assets/imageAlt.txt';

function AddImage() {
    const img = document.createElement( 'img' );
    img.alt = AltText;
    img.width = 300;
    img.src = KiwiImage;
    const body = document.querySelector( 'body' );
    body.appendChild( img );
}

export default AddImage;