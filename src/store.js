//we have decided that we are using redux so we have to install and  import it
//we use redux at the top level parent component
import {createStore} from 'redux';

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

export default store;