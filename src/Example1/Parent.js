import React, { Component } from 'react';
import { connect } from 'react-redux';

import Child from './Child';
import 'whatwg-fetch'
import {loadJoke} from './actions'


class Parent extends Component {
  constructor(){
    super();
    this.state = {message:'I love my great grand child'};
  }
  componentDidMount(){
    //where do you think the ajax call should be moved to ???????
    this.props.loadJoke();
  }
  render() {
    return (
      <div className="App">
        I'm the parent
        <Child
         callGreatGrandParent={(msg)=>{
           //we cannot use this function anymore because we aren't doing callbacks anymore
              alert(msg);
         }}
         message={this.state.message}/>
         <p>This is now where the mesage from my great grand child will show up:
        {//the message is on props because we told redux to put it there with connect
        }
         {this.props.greatGrandChildMessage}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    greatGrandChildMessage: state.message,
  };
};

/**
 * something needs to be responsible for starting the loading of joke
 * might as well use App
 */
const mapDispatchToProps = (dispatch) => {
  return {
    loadJoke: () => {
      dispatch(loadJoke());
    }
  };
};

export default connect(
  mapStateToProps,mapDispatchToProps
)(Parent);
