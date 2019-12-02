import React, {Component} from "react";
import axios from "axios";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends Component{
	constructor(props){
		super(props);
		this.state = {
			username:'',
			description:'',
			duration:0,
			date: new Date(),
			users:[]
		}

		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleDateChange=this.handleDateChange.bind(this);		
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	async componentDidMount(){
		try {
			const result = await axios.get('http://localhost:5000/api/v1/users');
			// my endpoint repsonse has its own data property. axios equally has its own data property
			if(result.data.data.length >0){
				const allUsers = result.data.data.map(user => {
					return user.username
				})
				this.setState({
					users:allUsers,
					username:allUsers[0]
				})		
			}
		} catch (error) {
			console.error(error);
		}
		
	}
	handleInputChange(e){
		const target = e.target;
		const name = target.name;
		const value = target.value;

		this.setState({
			[name]:value
		})
	}	
	handleDateChange(date){
		this.setState({
			date:date
		})
	}
	async handleSubmit(e){
		e.preventDefault();
		const exercise = {
			username:this.state.username,
			description:this.state.description,
			duration:this.state.duration,
			date:this.state.date
		}
		console.log(exercise);
		try {
			const result = await axios.post('http://localhost:5000/api/v1/exercises/add', exercise);
			console.log(result.data.status);
			window.location ='/';
		} catch (error) {
			console.error(error);
		}
		
	}
	render(){	
		return (
			<div className="container">
				<h2>Create Exercise</h2>				
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-md-12">
							<h4>Username:</h4>	
							<select name="username" required value={this.state.username	} onChange={this.handleInputChange}>
								{this.state.users.map((user)=>{
									return <option key={user} value={user}>{user}</option>
								})}
							</select>
						</div>
						<div className="col-md-12">
							<br/>
							<h4>Description:</h4>	
							<input name="description" required value={this.state.description} onChange={this.handleInputChange}/>
						</div>
						<div className="col-md-12">
							<br/>
							<h4>Duration:</h4>	
							<input name="duration" required value={this.state.duration} onChange={this.handleInputChange}/>
						</div>
						<div className="col-md-12">
							<br/>
							<h4>Date:</h4>	
							<DatePicker selected={this.state.date} onChange={this.handleDateChange}/>
						</div>
						<div className="col-md-12">
							<br/>
							<input type="submit" value="Create"/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateExercise;