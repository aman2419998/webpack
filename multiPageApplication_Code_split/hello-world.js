import HelloWorldButton from './src/components/hello-world-button/hello-world-button';
import Heading from './src/components/heading/heading';

const heading = new Heading();
heading.render( 'hello world' );

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();