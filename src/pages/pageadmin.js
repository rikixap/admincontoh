import React,{ Component } from 'react';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './pageadmin.css';
import Modal from './addadmin.js';
import $ from 'jquery';



class Pageadmin extends Component {

   state = {
        title: ''
    }
  

    edit() {
        window.$('#modal').modal('show')
        this.setState({title: 'Edit Admin'})
    }
    add() {
        window.$('#modal').modal('show')
        this.setState({title: 'Add Admin'})
    }
	render(){
		return( 
			<div className="student-admin">
				<Navbar />
				<div>
					<h1 className="text-center">Admin</h1>
					<hr className="w-75"/>
				
					<div className="col-8 mx-auto  p-0">
					   <FontAwesomeIcon icon ="plus-circle" className="fas fa-plus-circle fa-2x text-info" onClick={() => this.add()}/>
					 <table className="table table-striped">
                            <thead className="thead-dark">
                                <tr className="front_table text-center">
                                    <th>NO</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="text-center">1</th>
                                    <td>loremIpsum</td>
                                    <td>XXXXXXXX</td>
                                    <td>
                                        <div className="d-flex justify-content-around">
                                            <FontAwesomeIcon icon ="pen" className="pen text-primary" onClick={()=> this.edit()} />
                                            <FontAwesomeIcon icon="trash-alt" className="text-danger" data-toggle="modal" data-target="#delete" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
					</div>
                   </div>
                    <Modal title={this.state.title}/>
			</div>





			)
	}
}

export default Pageadmin;