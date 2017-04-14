import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
//if the only way to change data is to call an action
//then i need to get that action and use it
import {setChildMessage} from './actions/index';

//another helper tool to use react and redux together;
import {connect} from 'react-redux';

function GreatGrandChild(props) {
  return (
    <div className="App">
      ----I am the great grand child
      does my great grand parent love me:
      <h1>{props.message}</h1>
      <button value="call old grampy" type="button" onClick={()=>{
        // console.log(this.props);
        //so what do we change this to now;
        props.changeMessage("i love you too");
        }} >
        Call old granddad
        </button>
    </div>
  );
}
//the act of calling an action is called dispatching
function mapDispatchToProps(dispatch){
  //whatever properties are on this object will be magically put onto the components props
  var actionsOnProps = {
    //there will now be a property on props called changeMessage
    changeMessage:function(message){
      //dispatch is provided by redux, its magic, just take it for granted
      //call our setChildMessage action sending in the message

      //at this point setChildMessage is just a normal function. redux knows nothing about it
      //dispatch tells redux that this is a special action function and to update the database
      //with whatever it returns.
      dispatch(setChildMessage(message));
    },
    dosomethingelse:function(){},
    domorestuff:function(){}
  }
  return actionsOnProps;
}


//1)any component that cares about redux is now termed a Container
//connect is redux magic that takes the object from mapDispatchToProps
//   and copies the properties onto the component props.
//the first argument is null because we don't care about recieving data 
//   only changing data
const GreatGrandChildContainer = connect(null,mapDispatchToProps)
(GreatGrandChild);
//need to export our new container now
export default GreatGrandChildContainer;