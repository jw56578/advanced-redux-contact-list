import React, { Component } from 'react';
import Child from './Child';
//we have decided that we are using redux so we have to import it
import {createStore} from 'redux';

//redux is not specifically tied to REACT. you can use redux with other things
//so in order to use them together you need another library to help them work together
import {Provider} from 'react-redux';


////// step 1 - create your database ////////
//this is so simple, all we have is a message
//probably shouldn't be in the Parent.js but keep it simple for now
const defaultState = {
  message:''
}
var store = createStore(function(){},defaultState,
//need to do this weird stuff in order to use redux dev tools
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
////-----------------------------

//we have this store variable with our database in it but its not being used
//what is the point of that
//the provider allows the store to be used by all your components
class Parent extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        I'm the parent using a Redux database
        <Child
         callGreatGrandParent={(msg)=>{
              alert(msg);
         }}
         message={'I love my great grand child'}/>
      </div>
      </Provider>
    );
  }
  }
export default Parent;