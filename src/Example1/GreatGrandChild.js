import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
//if the only way to change data is to call an action
//then i need to get that action and use it
import {setMessage} from './actions/index';

//another helper tool to use react and redux together;
import {connect} from 'react-redux';

class GreatGrandChild extends Component {
  render() {
    return (
      <div className="App">
        ----I am the great grand child
        does my great grand parent love me:
        <h1>{this.props.message}</h1>
        <button value="call old grampy" type="button" onClick={()=>{
         // console.log(this.props);
          //so what do we change this to now;
          this.props.changeMessage(this.state.messageToGrandDad);
          }} >
          Call old granddad
          </button>
          <input onChange={(e)=>{
            this.setState({messageToGrandDad:e.target.value})
          }} />
          <div>
            I was told a joke
            {
              //when the component first loads, joke will be empty because the ajax call isn't done
              //so we have to check for value existing
              //when the joke gets loaded from the api it will be there
              //need to account for this
            }
            <h1>{this.props.joke.value === undefined ? "" : this.props.joke.value.joke}</h1>
          </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  var actionsOnProps = {
    changeMessage:function(message){
      dispatch(setMessage(message));
    },
    dosomethingelse:function(){},
    domorestuff:function(){}
  }
  return actionsOnProps;
}

/**
 * Now the great grand child cares about some data, the joke
 * so we have to do our mapping of state to props  
 */
const mapStateToProps = (state) => {
  return {
    joke: state.joke,
  };
};
//now use it in connect since we care about data now
const GreatGrandChildContainer = connect(mapStateToProps,mapDispatchToProps)
(GreatGrandChild);

export default GreatGrandChildContainer;