import {combineReducers} from 'redux';

//state is going to be the string of whatever the message ever gets set to
//action is the action we just created to change the message
function message(state = '',action){
  console.log(state,action);
  return state;
}
function obviouslyThereCouldBeMoreReducers(state= '',action){
  //in a large app there will be many Reducers/ cause there could be lots of data.
  return state;
}


//all reducers need to be merge together in a special redux way
//just take this for granted
const rootReducer = combineReducers({
  message,
  obviouslyThereCouldBeMoreReducers
});
console.log(rootReducer);