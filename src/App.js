import React from "react";
import { Provider } from "react-redux";
import NavBar from "./components/includes/Navbar.component";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import  "./assets/css/App.css";
import store from './redux/store'

const App = ()=>{
	return (
		<Provider store={store}>
			<div className="container">
				<NavBar/>
			</div>
		</Provider>
	);
	
}

export default App;