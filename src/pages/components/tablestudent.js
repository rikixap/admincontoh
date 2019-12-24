import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {withRouter} from 'react-router-dom';
import Admindelete from '../components/admindelete';
import axios from 'axios';

class Tablestudent extends Component {
   

    linkAddStudent() {
        this.props.history.push('/addstudent')
    }

    linkEditShowreel () {
        this.props.history.push('/editstudent/')
    }

    Showshowreel() {
        this.props.history.push('/detailshowreel')
    }
     delete() {
    
        this.setState()
    }
	render(){
		return(
			<div className="col-11 mx-auto">
                    <FontAwesomeIcon icon ="plus-circle" className="fas fa-plus-circle fa-2x text-info" onClick={() => this.linkAddStudent()} />
				 <table className="table table-striped">
				 	<thead>
                            <tr className="bg-dark text-light text-center">
                                <th>NO</th>
                                <th>Full Name</th>
                                <th>Department</th>
                                <th>Status</th>
                                <th>Gender</th>
                                <th>Birthday</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>User</th>
                                <th>Showreel</th>
                                <th>Action</th>



                            </tr>
                    </thead>        
                            <tbody>
                         
                                    <tr>
                                        <th>1</th>
                                        <td>full_name</td>
                                        <td>department</td>
                                        <td>Student</td>
                                        <td>Male</td>
                                        <td>200152</td>
                                        <td>hghfghgfhfgh</td>
                                        <td>fghghghg</td>
                                        <td>014751441</td>
                                        <td className="text-info">Account verification</td>
                                        <td><button className="btn btn-sm btn-light" onClick={()=> this.showShowreel()}>Show Showreel</button></td>
                                        <td>
                                            <div className="d-flex justify-content-around">
                                                <FontAwesomeIcon icon ="pen" className=" text-info"  onClick={() => this.linkEditStudent()}/>
                                                <FontAwesomeIcon icon ="trash-alt" className=" text-danger"  onClick={() => this.delete()} data-toggle="modal" data-target="#delete" />
                                            </div>
                                        </td>
                                    </tr>

                            </tbody>                       
                  </table> 
                  <Admindelete  />      
			</div>
			)
	}
}
export default withRouter(Tablestudent);