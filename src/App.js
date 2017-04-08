import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import Parent from './Example1/Parent';
import {Provider} from 'react-redux';
import rootReducer from './Example1/reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

/**
 * Reducers are not capable of handlying asyncness
 * so we have to use a special plugin to handle this redux-thunk
 * 
 */
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

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