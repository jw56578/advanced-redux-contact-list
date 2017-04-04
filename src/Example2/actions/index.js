//this is totally arbitrary
//you can call the function whatever you want
//the important thing that has to be is that it returns an object
// and that object has to have a property called "type" with some value that indicates
//  what the action is doing


export function setMessage(message){
  return {
    type:'SET_MESSAGE',
    message
  }
}