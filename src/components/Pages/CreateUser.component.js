import React, {Component} from "react";
import axios from "axios";

class CreateUser extends Component{
	constructor(props){
		super(props);
		this.state = {
			username:''			
		}

		this.handleInputChange=this.handleInputChange.bind(this);		
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	handleInputChange(e){		
		this.setState({
			username:e.target.value
		})
	}		
	async handleSubmit(e){
		e.preventDefault();
		const user = {
			username:this.state.username			
		}
		console.log(user);
		try {
			const result = await axios.post('http://localhost:5000/api/v1/users/add', user);
			console.log(result.data.status);
			this.setState({
				username:''
			})
		} catch (error) {
		  console.error(error);
		}		
	}
	render(){	
		return (
			<div className="container">
				<h2>Create User</h2>				
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-md-12">
							<br/>
							<h4>Username:</h4>	
							<input required value={this.state.username} onChange={this.handleInputChange}/>
						</div>						
						<div className="col-md-12">
							<br/>
							<input type="submit" value="Create User"/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateUser;