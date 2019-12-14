import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { fetchExercises, deleteExercise } from '../../redux/actions/exerciseActions';
import Exercise from "../includes/Exercise";


class ExerciseList extends Component{
	constructor(props){
		super(props);		
		this.handleDelete=this.handleDelete.bind(this);			
	}
	componentDidMount(){
		this.props.fetchExercises();		
	}
	handleDelete(id){		
		this.props.deleteExercise(id)		
	}
	exerciseList(){
		return this.props.exercises.map(currentExercise => {
			return <Exercise exercise={currentExercise} deleteExercise={this.handleDelete} key={currentExercise._id}/>
		})
	}	
	render(){	
		return (
			<div className="container">
				<h2>Exercise List</h2>	
				<div className="row">
					<div className="col-md-12">
						<table className="table table-light">
							<thead>
								<tr>
									<th>Username</th>
									<th>Description</th>
									<th>Duration</th>
									<th>Date</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{this.exerciseList()}
							</tbody>
						</table>
					</div>
				</div>			
			</div>
		);
	}
}
ExerciseList.propTypes= {
	fetchExercises:PropTypes.func.isRequired,
	exercises:PropTypes.array.isRequired,
	deleteExercise:PropTypes.func.isRequired
}
//note: the first 'exercises' is the name of the prop with which i will work in this component
//'state.exercise' exercise here is the name of the reducer responsible for that data, note, it
//is the name i used in the combine reducer function, while the last 'exercises' is the name of the
//variable in my reducer to which i passed the payload, this should be the same name with the variable in 
// my initial state
const mapStateToProps = state => ({
	exercises: state.exercise.exercises	
})
export default connect(mapStateToProps,{fetchExercises, deleteExercise})(ExerciseList);