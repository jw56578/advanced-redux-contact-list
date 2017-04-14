/**
 * The act of caring that some data was changed is handled by a normal javascript function
 * this is very similiar to actions
 * these function are called reducers
 */

import {combineReducers} from 'redux';

//the state argument is the old data from the database
//if nothing has ever happened then you need to determine what that starting state it
//example, the message might be empty instead of null
//you can do this with ES6 default parameters
//state can be anything. it is up to you to decide what is used to store a message
// if we used a string, we could never store the history of message 
//    because it would just overwrite the last one
// what would we use to store the history of messages????
//action is the object from the action function we created, setChildMessage in this case
//action has the new data to be inserted into the database
// if action has data on it then return that data, else return state

function childMessage(state = '',action){
  //When actions happen, all reducers all called, so we have to decide if we care about it
  if(action.type !== "SET_CHILD_MESSAGE" || !action.message){
    return state;
  }
  return action.message;
}
function parentMessage(state= '',action){
  return state;
}


//all reducers need to be merge together in a special redux way
//just take this for granted
const rootReducer = combineReducers({
  childMessage,
  parentMessage
});
console.log(rootReducer);
export default rootReducer;