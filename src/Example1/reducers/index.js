import {combineReducers} from 'redux';

function message(state = '',action){
  if(action.type !== "SET_MESSAGE" || !action.message){
    return state;
  }
  return action.message;
}
//the reducer needs to handle the action of JOKE_LOADED 
//which means that the joke has been retrieved from the server and is available
// at this point we do not care about the action for LOAD_JOKE  because there is nothing to do
// when you load a joke
//this could be different, we could maybe show a message saying "getting joke" or something when the 
//LOAD_JOKE action happens. and then make the message disappear when JOKE_LOADED happens
function joke(state= {},action){
  switch (action.type) {
    case "JOKE_LOADED":
      return action.joke;
  }
  return state;
}

const rootReducer = combineReducers({
  message,
  joke
});
console.log(rootReducer);
export default rootReducer;