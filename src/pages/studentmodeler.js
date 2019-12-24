import React, { Component } from 'react';
import Navbar from './navbar';
import Judul from  './components/judul';
import Tablestudent from './components/tablestudent';
import './studentmodeler.css';
import axios from 'axios';

class Studentmodeler extends Component {
	   // constructor() {
    //     super()
    //     this.state = {
    //         data_modeler: []
    //     }
    // }
    //  componentDidMount() {
    //     var depart = []
    //     axios.get('https://showreeldoes-backend.herokuapp.com/v1/students').then(res => {
    //         console.log(res.data.students)
    //         res.data.students.map(student => {
    //             if(student.department === '3D Modeler')
    //                 depart.push(student)
    //                 this.setState({data_modeler: depart})
    //                 console.log('hasil', this.state.data_modeler)
    //         })
    //     })
    // }
	render(){
		return(
				<div  className="student-admin">
					<Navbar />
					<div>
						<h1 className="text-center">3D  Modeler</h1>
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

export default Studentmodeler;