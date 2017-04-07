import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import Parent from './Example1/Parent';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const defaultState = {
  message:'',
  joke: ''
}
var store = createStore(function(){},defaultState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

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