//this is totally arbitrary
//you can call the function whatever you want
//the important thing is that it returns an object
// and that object has to have a property called "type" with some value that indicates
//  what the action is doing
export function setMessage(message){
  console.log(message);
  return {
    type:'SET_MESSAGE',
    message
  }
}