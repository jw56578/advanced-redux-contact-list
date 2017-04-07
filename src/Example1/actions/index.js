/**
 * The act of changing data in a redux database is called an action
 * an action in code is just a function that returns an object
 */

//this is totally arbitrary
//you can call the function whatever you want
//the important thing is that it returns an object
// and that object has to have a property called "type" with some value that indicates
//  what the action is doing
export function setMessage(message){
  return {
    type:'SET_MESSAGE',
    message
  }
}
export function setJoke(joke){
  return {
    type:'SET_JOKE',
    joke
  }
}