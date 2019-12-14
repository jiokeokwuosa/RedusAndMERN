import React, {Component} from "react";
import { connect } from 'react-redux';
import { postExercise, inputChange  } from '../../redux/actions/exerciseActions';
import { fetchUsers } from '../../redux/actions/userActions';
import PropTypes from "prop-types";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";


class CreateExercise extends Component{
	constructor(props){
		super(props);
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleDateChange=this.handleDateChange.bind(this);		
		this.handleSubmit=this.handleSubmit.bind(this);
	}
	async componentDidMount(){
		this.props.fetchUsers();		
	}
	handleInputChange(e){
		const target = e.target;
		const name = target.name;
		const value = target.value;
		this.props.inputChange(name, value);		
	}	
	handleDateChange(newDate){		
		this.props.inputChange('date', newDate);
	}
	handleSubmit(e){
		e.preventDefault();
		const exercise = {
			username:this.props.username,
			description:this.props.description,
			duration:this.props.duration,
			date:this.props.date
		}
		this.props.postExercise(exercise);
		
	}
	render(){	
		return (
			<div className="container">
				<h2>Create Exercise</h2>				
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-md-12">
							<h4>Username:</h4>	
							<select name="username" required value={this.props.username	} onChange={this.handleInputChange}>
								{this.props.users.map((user)=>{
									return <option key={user} value={user}>{user}</option>
								})}
							</select>
						</div>
						<div className="col-md-12">
							<br/>
							<h4>Description:</h4>	
							<input name="description" required value={this.props.description} onChange={this.handleInputChange}/>
						</div>
						<div className="col-md-12">
							<br/>
							<h4>Duration:</h4>	
							<input name="duration" required value={this.props.duration} onChange={this.handleInputChange}/>
						</div>
						<div className="col-md-12">
							<br/>
							<h4>Date:</h4>	
							<DatePicker selected={this.props.date} onChange={this.handleDateChange}/>
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
CreateExercise.propTypes= {
	postExercise:PropTypes.func.isRequired,	
	fetchUsers:PropTypes.func.isRequired,
	inputChange:PropTypes.func.isRequired,
	users:PropTypes.array.isRequired,
	username:PropTypes.string.isRequired,
	description:PropTypes.string.isRequired,
	duration:PropTypes.number.isRequired	
}
const mapStateToProps = state => ({
	users: state.user.users,
	username: state.exercise.username,
	description: state.exercise.description,
	duration: state.exercise.duration,
	date: state.exercise.date,
})
export default connect(mapStateToProps, {postExercise, fetchUsers, inputChange})(CreateExercise);