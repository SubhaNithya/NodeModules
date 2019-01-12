import React, {Component} from 'react';
import Child1 from './Child1';

export default class Parent extends Component{
	constructor(props){
		super(props);
		this.state={
			name:"",
			email:"",
			phone:"",
			gender:"",
			selectedOption:"male",
			objdata:{},
			array:[]
		};
	}
	getName(e)
	{
		this.setState({
			name:e.target.value
		})
	}
	getEmail(e)
	{
		this.setState({
			email:e.target.value
		})
	}
	getPhone(e)
	{
		this.setState({
			phone:e.target.value
		})
	}
	getGender(data)
	{
		this.setState({
			selectedOption: data
		})
	}
	getData(e)
	{
		e.preventDefault();
		this.state.objdata["name"]=this.state.name;
		this.state.objdata["email"]=this.state.email;
		this.state.objdata["phone"]=this.state.phone;
		this.state.objdata["gender"]=this.state.selectedOption;
		this.setState({
			objdata:this.state.objdata
			})
				this.state.array.push(this.state.objdata);
				this.setState({
					array:this.state.array
				}, () => {
					console.log("obj", this.state.array)
					console.log("array", this.state.array)
					    this.state.name="";
						this.state.email="";
						this.state.phone="";
						this.state.gender="";
						this.state.objdata = {}; 
						this.setState({
							name: this.state.name,
							email: this.state.email,
							phone: this.state.phone,
							gender: this.state.gender,
							objdata: this.state.objdata
						})
				})
	} 
	sendParent(data,index)
	{
		this.state.array.splice(index,1);
		this.setState({
			array:this.state.array
		})
				
	}
	editData(data,index)
	{

	}
	render(){
		return(
			<div>
					<form>
						Name:
						<input type="text"  value={this.state.name} onChange={this.getName.bind(this)} /><br />
						Email:
						<input type="email"  value={this.state.email} onChange={this.getEmail.bind(this)}/><br />
						Phone:
						<input type="text" value={this.state.phone} onChange={this.getPhone.bind(this)} /><br />
						Gender:<br/>
						<input type="radio" value="male" checked={this.state.selectedOption==='male'}  onChange={this.getGender.bind(this, "male")} />Male<br />
						<input type="radio" value="female" checked={this.state.selectedOption==='female'} onChange={this.getGender.bind(this, "female")} />Female<br />
						<button onClick={this.getData.bind(this)}>GetData</button>
					</form>
					<Child1 data={this.state.array} sendParent={this.sendParent.bind(this)} editData={this.editData.bind(this)} />
					
			</div>
			);
		}
	} 