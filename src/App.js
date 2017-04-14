import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import Parent from './Example1/Parent';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Example1/reducers';
const defaultState = {
  childMessage:'',
  parentMessage: ''
}
//okay now we need to give the reducers to the store
//the store needs to know all the functions which represent wanted to know when data has change
var store = createStore(rootReducer,defaultState,
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