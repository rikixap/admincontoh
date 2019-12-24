import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './judul.css';
class Judul extends Component {
	render(){
		return(
			<div>
				<div  className="animator_wrapper">
					<ul>
						<li>
							<Link to="/studentmodeler">3D Modeler</Link>
						</li>
						<li>
							<Link to="/studentcompositor">Compositor</Link>
						</li>
						<li>
							<Link to="/studentanimator">Animator</Link>
						</li>
						<li>
							<Link to="/studentprogrammer">Programmer</Link>
						</li>
					</ul>
				</div>
			</div>
			)
	}
}

export default Judul;