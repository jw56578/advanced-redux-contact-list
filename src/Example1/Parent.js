import React, { Component } from 'react';
import { connect } from 'react-redux';

import Child from './Child';
import 'whatwg-fetch'
/*
Okay, how does this parent say that it cares about the message that great grand child sends

*/
function Parent(props) {
  return (
    <div className="App">
      I'm the parent
      <Child
        callGreatGrandParent={(msg)=>{
          //we cannot use this function anymore because we aren't doing callbacks anymore
            alert(msg);
        }}
        message={"dirty joke"}/>
        <p>This is now where the mesage from my great grand child will show up:
      {//the message is on props because we told redux to put it there with connect
      }
        {props.greatGrandChildMessage}</p>
    </div>
  );
}

/* eslint-disable no-console */

/**
 * 
 * what we are going to do is map all the stuff from the database that we care about into the props
 * of this component
 * anytime something in the database changes, it will automtically be put into the 
 * props of this component
 * 
 */
const mapStateToProps = (state) => {
  return {
    //greatGrandChildMessage is the name of the prop
    //.message has to be the same name as the reducer function
    greatGrandChildMessage: state.childMessage,
  };
};


//the connect function again does it magic to link everything up
export default connect(
  mapStateToProps
)(Parent);
