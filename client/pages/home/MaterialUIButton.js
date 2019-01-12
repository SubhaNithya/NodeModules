import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class MaterialUIButton extends Component{
	constructor(props){
		super(props);
		this.state={
			name:"",
			email:"",
			phone:"",
			objdata:{},
		}
	}
	const styles = theme =>({
		button:{
			margin: theme.spacing.unit,
		},
		input:{
			display: 'none',
		},
	});
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


	render(){
		return(
			<div>
				Name:
				<input type="text" value={this.state.name} onChange={this.getName.bind(this)} /><br /><br />
				Email:
				<input type="email" value={this.state.email} onChange={this.getEmail.bind(this)} /><br /><br />
				Phone:
				<input type="text" value={this.state.phone} onChange={this.getPhone.bind(this)} /><br /><br />
				<Button variant="contained" className={classes.button}>
        		Default
      			</Button>

			</div>
			);
	}
}

MaterialUIButton.PropTypes ={
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialUIButton);