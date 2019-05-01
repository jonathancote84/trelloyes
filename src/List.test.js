import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Card from './Card'
import store from './STORE'
import renderer from 'react-test-renderer';



describe('List component', () =>{
    it('renders without crashing', () => {
        //first create the DOM element to render the component into 
        const div = document.createElement('div');

        //render the component, this is the actual test, if something goes wrong it will fail here 
        ReactDOM.render( <List
            key={store.lists[0].id}
            header={store.lists[0].header}
            cards={store.lists[0].cardIds.map(id => store.allCards[id])}
        />
            
    , div);

        //clean up code 
        ReactDOM.unmountComponentAtNode(div);

    });
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List
                key={store.lists[0].id}
                header={store.lists[0].header}
                cards={store.lists[0].cardIds.map(id => store.allCards[id])}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})
describe('Cards component', ()=>{
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
it('renders the UI as expected', () => {
    const tree = renderer
        .create( 
            <Card/>

        )
        .toJSON();
    expect(tree).toMatchSnapshot();
})

})