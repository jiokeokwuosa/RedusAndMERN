import React, {Component} from "react";
import axios from "axios";
import Exercise from "../includes/Exercise";


class ExerciseList extends Component{
	constructor(props){
		super(props);
		this.state = {
			exercises:[]			
		}
		this.handleDelete=this.handleDelete.bind(this);			
	}
	async componentDidMount(){
		try {
			const result = await axios.get('http://localhost:5000/api/v1/exercises');
			// my endpoint repsonse has its own data property. axios equally has its own data property
			if(result.data.data.length >0){
				const allExercises = result.data.data;				
				this.setState({
					exercises:allExercises					
				})					
			}
		} catch (error) {
			console.error(error);
		}	
		
	}
	async handleDelete(id){		
		try {
			const result = await axios.delete('http://localhost:5000/api/v1/exercises/'+id);
			console.log(result.status);
			//after deleting from the database, equally delete it from what the user is seeing
			this.setState({
				exercises:this.state.exercises.filter(el=> el._id !== id)
			})			
		} catch (error) {
			console.error(error);
		}	
		
	}
	exerciseList(){
		return this.state.exercises.map(currentExercise => {
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

export default ExerciseList;