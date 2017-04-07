/**
 * The act of caring that some data was changed is handled by a normal javascript function
 * this is very similiar to actions
 * these function are called reducers
 * 
 */

import {combineReducers} from 'redux';

//state can be anything. it is up to you to decide what is used to store a message
// if we used a string, we could never store the history of message 
//    because it would just overwrite the last one
// what would we use to store the history of messages?
//action is the action we just created to change the message
function message(state = '',action){
  console.log(state,action);
  return state;
}
function joke(state= '',action){
  return state;
}


//all reducers need to be merge together in a special redux way
//just take this for granted
const rootReducer = combineReducers({
  message,
  obviouslyThereCouldBeMoreReducers
});
console.log(rootReducer);
export default rootReducer;