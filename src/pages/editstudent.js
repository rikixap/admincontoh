import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './navbar';


class Editstudent extends Component{
	render(){
		return(
			<div>
				<Navbar />
				<div className="col-11 mx-auto my-3">
					<div className="text-center">
                   		 <h1 className="font-weight-bold">Edit New Student Identity</h1>
               		 	 <hr className="w-100" />
               		 </div>
               		 <div className="d-flex border p-3 rounded justify-content-between">
               		 	<div className="col-2">
               		 		<div  className="border p-3 rounded text-center user-image d-flex align-items-center justify-content-center">
                  				<FontAwesomeIcon icon="user-alt" className="fas fa-6x"/>
              				</div>
              				 <p className="text-muted text-center">Click to browse a file</p>
               		 	</div>
               		 		<div className="col-9 py-3">
               		 			<form>
               		 				  <div className="form-group row">
                                   		 <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
	                                    <div className="col-sm-10">
	                                        <input type="text" className="form-control" id="username" name="username" />
	                                    </div>
                                	  </div>
	                                <div className="form-group row">
	                                    <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
	                                    <div className="col-sm-10">
	                                            <input type="password" className="form-control" id="password" name="password" />
	                                    </div>
	                                </div>
	                                <div className="form-group row">
	                                    <label htmlFor="fullname" className="col-sm-2 col-form-label">Full Name:</label>
	                                    <div className="col-sm-10">
	                                            <input type="text" className="form-control" id="fullname" name="full_name"/>
	                                    </div>
	                                </div>
	                                <div className="form-group row">
	                                    <label htmlFor="department" className="col-sm-2 col-form-label">Department:</label>
	                                    <div className="col-sm-10">
	                                        <select className="form-control" name="department" >
	                                            <option>-- Select Department --</option>
	                                            <option>Animator</option>
	                                            <option>Compositor</option>
	                                            <option>Programmer</option>
	                                            <option>3D Modeler</option>
	                                        </select>
	                                    </div>
	                                </div>
	                                <div className="form-group row">
	                                    <label htmlFor="department" className="col-sm-2 col-form-label">Status:</label>
	                                    <div className="col-sm-10">
	                                        <select className="form-control" name="status">
	                                            <option>Student</option>
	                                            <option>Graduated</option>
	                                        </select>
	                                    </div>
	                                </div>
	                                <div className="form-group row">
	                                    <label htmlFor="department" className="col-sm-2 col-form-label">Gender:</label>
	                                    <div className="col-sm-10">
	                                        <select className="form-control" name="gender">
	                                            <option>Male</option>
	                                            <option>Female</option>
	                                        </select>
	                                    </div>
	                                </div>
	                                <div className="form-group row">
	                                    <label htmlFor="birthday" className="col-sm-2 col-form-label">Birthday:</label>
	                                    <div className="col-sm-10">
	                                            <input type="date" className="form-control" name="birthday"  />
	                                
	                                    </div>
	                                </div>
	                                <div className="form-group row">
	                                    <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
	                                    <div className="col-sm-10">
	                                            <input type="email" className="form-control" name="email" />
	                                    </div>
	                                </div>
	                                <div className="form-group row">
	                                    <label htmlFor="address" className="col-sm-2 col-form-label">Adress:</label>
	                                    <div className="col-sm-10">
	                                            <input type="text" className="form-control" id="adress" name="address"/>
	                                    </div>
	                                </div>
	                                <div className="form-group row">
	                                    <label htmlFor="phone" className="col-sm-2 col-form-label">Phone:</label>
	                                    <div className="col-sm-10">
	                                            <input type="number" className="form-control" id="phone" name="phone" />
	                                    </div>
	                                </div>
	                                <div className="text-right">
	                                    <button type="button" className="btn btn-danger">Edit Student</button>
	                                </div>
               		 			</form>
               		 		</div>
               		 </div>
				</div>
			</div>
			)
	}
}


export default Editstudent;