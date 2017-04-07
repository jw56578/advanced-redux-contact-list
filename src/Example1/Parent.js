import React, { Component } from 'react';
import Child from './Child';
import 'whatwg-fetch'
/* 1) why is my great grand child not getting my joke?
 * 2) What if the Parent wants to send other things to GreatGrandChild
 * - daily news clips from Fox News
 * - pictures of cats... etc
 * this component would now have to make many other ajax calls
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