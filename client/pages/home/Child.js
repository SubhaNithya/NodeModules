import React, { Component } from 'react';

export default class Child extends Component {
constructor(props){
super(props);
this.state = {

}
}

 componentDidMount(){
   console.log("this.props", this.props);
 }

 componentWillReceiveProps(newProps){
   console.log("new.props", newProps);
 }


 shouldComponentUpdate(){
   return false;
 }

 render() {
   return (
     <div>
       
     </div>
   );
 }
}