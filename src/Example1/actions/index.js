import 'whatwg-fetch'

export function setMessage(message){
  return {
    type:'SET_MESSAGE',
    message
  }
}
/**
 * Actions are responsible for making ajax calls
 * we have to do something special because it is an async call
 * you return a function instead of an object
 */
export function loadJoke(){
  return function (dispatch){
    dispatch({
      type: "LOAD_JOKE"
    });
    fetch('http://api.icndb.com/jokes/random')
    .then(function(response) {
      return response.json();
    }).then(function(jokejson) {
      dispatch(jokeLoaded(jokejson));
    });
  };
}
/*because of async we have to break up the action into 2 parts
part 1 is the start of the ajax call
part 2 is when the ajax call is done
we do this because with async we have no idea when it will be done so it has to be in 2 stages
 */
export function jokeLoaded(joke) {
  return {
    type: "JOKE_LOADED",
    joke
  };
}