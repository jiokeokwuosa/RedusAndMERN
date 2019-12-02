import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExerciseList from "../Pages/ExerciseList.component";
import CreateExercise from "../Pages/CreateExercise.component";
import EditExercise from "../Pages/EditExercise.component";
import CreateUser from "../Pages/CreateUser.component";

const MyNav = props => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<Router>		
			<Navbar color="light" light expand="md">
				<NavbarBrand tag={Link} to="/">
					Exercise Tracker
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
					    <NavItem>
							<NavLink tag={Link} to="/">
								Exercises
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/create">
								Create Exercises
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/user">
								Create User
							</NavLink>
						</NavItem>										
					</Nav>
				</Collapse>
			</Navbar>
			<Switch>
				<Route exact path="/" component={ExerciseList} />		
                <Route exact path="/create" component={CreateExercise} />	
				<Route exact path="/user" component={CreateUser} />
				<Route exact path="/edit/:id" component={EditExercise} />							
			</Switch>			
		</Router>
	);
};
export default MyNav;