import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'


//the test case 
it('renders without crashing', () => {
    //first create the DOM element to render the component into 
    const div = document.createElement('div');

    //render the component, this is the actual test, if something goes wrong it will fail here 
    ReactDOM.render( <Card
        key='0' 
        title='secondCard'
        content='this is the actual test'
      />, div);

    //clean up code 
    ReactDOM.unmountComponentAtNode(div);

});

