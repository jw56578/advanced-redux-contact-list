import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import Parent from './Example1/Parent';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Parent />
      </div>
    </Provider>
  );
}
export default App;