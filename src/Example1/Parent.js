import React, { Component } from 'react';
import Child from './Child';
import 'whatwg-fetch'
/* 1) why is my great grand child not getting my joke?
 * 2) We do not want the components responsible for making ajax calls, they are only suppose to render
 * 3) why am i not getting my great grand childs message
 */
class Parent extends Component {
  constructor(){
    super();
    this.state = {message:'I love my great grand child'};
  }
  componentDidMount(){
    //i want to tell my great grand child a joke
    var me = this;
    fetch('http://api.icndb.com/jokes/random')
    .then(function(response) {
      return response.json()
    }).then(function(data) {
      me.setState({
        message:data
      });
    })
  }
  render() {
    return (
      <div className="App">
        I'm the parent
        <Child
         callGreatGrandParent={(msg)=>{
              alert(msg);
         }}
         message={this.state.message}/>
      </div>
    );
  }
  }
export default Parent;