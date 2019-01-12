import React, {Component} from 'react';

export default class Child1 extends Component{
	constructor(props){
		super(props);
		this.state={
			arr:[],
		}
	}
	componentDidMount(){
		console.log("props", this.props)
	}

	componentWillReceiveProps(newProps){
		console.log("newProps", newProps)
		this.setState({
			arr: newProps.data
		})
	}
	deleteData(data,index)
	{
		this.props.sendParent(data,index)
	}
	updateData(data,index)
	{
		this.props.editData(data,index)
	}
	render(){
		
		return(
			<div>
				{(this.state.arr.map((data,index) => {
					return(
						<div>
							<p>{data.name}</p>
							<p>{data.email}</p>
							<p>{data.phone}</p>
							<p>{data.gender}</p>
							<button onClick={this.deleteData.bind(this,data,index)}>Delete</button>
							<button onClick={this.updateData.bind(this,data,index)}>Edit</button>
						</div>
					)
				}))}

			</div>
			);
	}
}