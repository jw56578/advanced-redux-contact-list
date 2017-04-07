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
          this.props.changeMessage("i love you too");
          }} >
          Call old granddad
          </button>
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

const GreatGrandChildContainer = connect(null,mapDispatchToProps)
(GreatGrandChild);

export default GreatGrandChildContainer;