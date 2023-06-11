import './heading.scss';

class Heading {
    render() {
        const h1 = document.createElement( 'h1' );
        h1.innerText = 'Webpack is Awesome';
        const body = document.querySelector( 'body' );
        body.appendChild( h1 );
    }
}

export default Heading;