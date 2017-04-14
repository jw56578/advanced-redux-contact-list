import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import Parent from './Example1/Parent';

//we have decided that we are using redux so we have to import it
//we use redux at the top level parent component
import {createStore} from 'redux';

//redux is not specifically tied to REACT. you can use redux with other things
//so in order to use them together you need another library to help them work together
import {Provider} from 'react-redux';


////// step 1 - create your database ////////
//this is so simple, all we have is a message from child and message from parent
const defaultState = {
  messageFromChild:'',
  messageFromParent: ''
}
var store = createStore(function(){},defaultState,
//need to do this weird stuff in order to use redux dev tools
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
////-----------------------------

//we have this store variable with our database in it but its not being used
//what is the point of that
//the provider allows the store to be used by all your components
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Parent />
        </div>
      </Provider>
    );
  }
  }
export default App;