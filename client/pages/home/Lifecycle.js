import React, {Component} from 'react';

export default class Lifecycle extends Component {
 constructor(props) {
   super(props);
   this.state = { seconds: 0 };
 }

 tick() {
   this.setState(state => ({
     seconds: state.seconds + 1
   }));
 }

 componentDidMount() {
   console.log("componentDidMount")
   this.interval = setInterval(() => this.tick(), 1);
 }

//shouldComponentUpdate(nextProps, nextState) {
   //return this.state.count != nextState.value;
 //}
 // componentWillUpdate(){
 //   clearInterval(this.interval);
 // }

 componentWillUnmount() {
   console.log("componentWillUnmount")
   clearInterval(this.interval);
 }

 render() {
   return (
     <div>
       Seconds: {this.state.seconds}
       {(this.state.seconds > 100) ? <p>Hello</p> : <p>In parent</p>}
     </div>
   );
 }
}