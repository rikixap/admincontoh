import React, { Component } from 'react';
import Navbar from './navbar';
import Judul from  './components/judul';
import Tablestudent from './components/tablestudent';
import './studentmodeler.css';


class Studentanimator extends Component {
	render(){
		return(
				<div  className="student-admin">
					<Navbar />
					<div>
						<h1 className="text-center">Animator</h1>
						<hr className="w-75"/>
					</div>
					<Judul />
					  <div>
                  		<Tablestudent />
                    </div>
				</div>

			)
	}
}

export default Studentanimator;