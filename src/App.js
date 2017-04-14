import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import Parent from './Example1/Parent';
import store from './store';
//redux is not specifically tied to REACT. you can use redux with other things
//so in order to use them together you need another library to help them work together
import {Provider} from 'react-redux';

//we have this store variable with our database in it but its not being used
//what is the point of that
//the provider allows the store to be used by all your components
function App () {
  return (
    <Provider store={store}>
      <div className="App">
        <Parent />
      </div>
    </Provider>
  );
}
export default App;