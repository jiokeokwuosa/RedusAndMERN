import React, { Component } from "react";
import "./assets/css/style.css";
import Homepage from "./components/pages/Homepage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

class App extends Component {
	render() {
		return (
			<div>
				<NavBar
					Homepage={Homepage}				
				/>
			</div>
		);
	}
}

export default App;