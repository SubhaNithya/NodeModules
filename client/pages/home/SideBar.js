import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendObjectData} from './../../actions/index.js';
import {editUserData, deleteUserData} from './../../actions/index.js';
import home from './home.css';

class SideBar extends Component{
	constructor(props){
		super(props);
		this.state={
			togglebox:false,
			name:"",
			email:"",
			phone:"",
			objdata:{},
			
			array:[],
			editIndex: null,
			editedObjData: {},
			getUpdateName: null,
			getUpdateEmail: null,
			getUpdatePhone: null
		}
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
	clickButton(e)
	{
		e.preventDefault();
			this.state.objdata["name"]=this.state.name;
			this.state.objdata["email"]=this.state.email;
			this.state.objdata["phone"]=this.state.phone;
			this.setState({
				objdata:this.state.objdata
			}, () => { 
			console.log("objectData",this.state.objdata);
			this.props.sendObjectData(this.state.objdata);
				this.state.name= "";
				this.state.email="";
				this.state.phone="";
				this.state.objdata={};
				this.setState({
			name: this.state.name,
			email: this.state.email,
			phone: this.state.phone,
			objdata:this.state.objdata
		})
	})

	}
	componentDidMount()
	{
		console.log("Props in child",this.props);
	}
	componentWillReceiveProps(newProps)
	{
		console.log("newProps in child", newProps)
		this.setState({
			array:newProps.data
		})
	}
	editData(user, index)
	{
		this.setState({
			editIndex: index
		})
	}
	deleteData(indexById)
	{
		this.props.deleteUserData(indexById);
	}
	getEditName(e)
	{
		let name= e.target.value;
		this.setState({
			getUpdateName:e.target.value
		})
	}
	getEditEmail(e)
	{
		this.setState({
			getUpdateEmail:e.target.value
		})
	}
	getEditPhone(e)
	{
		this.setState({
			getUpdatePhone:e.target.value
		})
	}
	toggleEditData(index,user)
	{
		console.log("working", index,user)
		let oldName = user.name;
		let oldEmail = user.email;
		let oldPhone = user.phone;

		console.log("user.name", user.name)
		console.log("user.email", user.email)
		console.log("user.phone", user.phone)

		this.setState({
			getUpdateName: (this.state.getUpdateName === null) ? oldName : this.state.getUpdateName,
			getUpdateEmail: (this.state.getUpdateEmail === null) ? oldEmail : this.state.getUpdateEmail,
			getUpdatePhone: (this.state.getUpdatePhone === null) ? oldPhone : this.state.getUpdatePhone
		}, () => {
			if(this.state.getUpdateName !== null && this.state.getUpdateEmail !== null && this.state.getUpdatePhone !== null){
				this.state.editedObjData['name'] = this.state.getUpdateName;
				this.state.editedObjData['email'] = this.state.getUpdateEmail;
				this.state.editedObjData['phone'] = this.state.getUpdatePhone;

				this.setState({
					editedObjData:this.state.editedObjData
				}, () => {
					console.log("editedObjData", this.state.editedObjData)
					this.props.editUserData(this.state.editedObjData, index);
				})
			}

		})
		this.setState({
			editIndex: null
		})
	}

	
	render(){
		console.log("array",this.state.array);
		return(
			<div className="body">
				<nav className="navbar navbar-inverse">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">PercMind</a>
					</div>
					
				</nav>

				<div className="container-fluid">
					<div className="row-content">
						<div className="col-sm-2 col-md-2 col-lg-2 bg">
								
							<ul className="nav nav-pills nav-stacked">
								<li className="nav-item"><a href="#section1">Home</a></li><hr className="style-one" />
								<li className="nav-item"><a href="#section2">Calender</a></li><hr className="style-one" />
								<li className="nav-item"><a href="#section3">Clients</a></li><hr className="style-one" />
								<li className="nav-item"><a href="#section4">Accounting</a></li><hr className="style-one" />
								<li className="nav-item"><a href="#section5">Projects</a></li><hr className="style-one" />
								<li className="nav-item"><a href="#section6">Messages</a></li><hr className="style-one" />
								<li className="nav-item"><a href="#section7">Support</a></li><hr className="style-one" />
								<li className="nav-item"><a href="#section8">Templates</a></li><hr className="style-one" />
								<li className="nav-item"><a href="#section9">Settings</a></li><hr className="style-one" />
								<li className="nav-item"><a href="#section10">Users</a></li><hr className="style-one" />
							</ul>
						</div>

						<div className="col-sm-10 col-md-10 col-lg-10">
							
							<div className="container">
								<button className="button" data-toggle="modal" data-target="#myModal">Open Modal
								</button>
								<h4><small>System Lead</small></h4><hr className="style-one" />
								
  								<div className="modal" id="myModal">
  									<div className="modal-dialog">
  										<div className="modal-content">
  											<form className="form-horizontal">
  												<div className="form-group">
  													<label className="control-label col-sm-2" >Name:</label>
  													<input type="text" value={this.state.name} className="form-control" id="name" name="uname" onChange={this.getName.bind(this)}/>
  												</div>

  												<div className="form-group">
  													<label className="control-label col-sm-2" >Email:</label>
  													<input type="email" value={this.state.email} className="form-control" id="email" name="email" onChange={this.getEmail.bind(this)}/>
  												</div>

  												<div className="form-group">
  													<label className="control-label col-sm-2" >Phone:</label>
  													<input type="text" value={this.state.phone} className="form-control" id="phone" name="phone" onChange={this.getPhone.bind(this)}/>
  												</div>

  												<div className="form-group">
  													<button  className="btn btn-default" data-dismiss="modal" onClick={this.clickButton.bind(this)}>Submit</button>
  												</div>

  												
  											</form>
  										</div>
  									</div>
  								</div>
  							</div>

  							<div className="table-container">
  								<table className="table table-striped">
  									<thead>
  										<tr>
  											<th>Name</th>
  											<th>Email</th>
  											<th>Phone</th>
  											<th>Options</th>
  										</tr>
									</thead>

									{(this.state.array.map((user,index) => {
										if(index === this.state.editIndex){
											return(
												<div key={index}>
													<input type="text" defaultValue={user.name} onChange={this.getEditName.bind(this)} />
													<input type="text" defaultValue={user.email} onChange={this.getEditEmail.bind(this)} />
													<input type="text" defaultValue={user.phone} onChange={this.getEditPhone.bind(this)} />
													<p onClick={this.toggleEditData.bind(this,user,index)}>Edit</p>
													<span style={{cursor: "pointer"}} onClick={this.deleteData.bind(this,index)}>X</span>
												</div>
											);
										}
										return(
											<div key={index}>
												<tbody>
													<tr>
														<td className="row">{user.name}</td>
														<td className="row">{user.email}</td>
														<td className="row">{user.phone}</td>
														<td><p onClick={this.editData.bind(this, user, index)}>EDIT</p>
              											<span style={{cursor: "pointer"}} onClick={this.deleteData.bind(this, index)}>X</span></td>
													</tr>
												</tbody>
											</div>
										);
									}))}
								</table>
  							</div>
  						</div>
  					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state)
{
	console.log("state",state);
	return {
		data:state.userReducer.user
	};
}
function mapDispatchToProps(dispatch)
{
	return bindActionCreators({sendObjectData:sendObjectData , editUserData: editUserData, deleteUserData: deleteUserData}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);