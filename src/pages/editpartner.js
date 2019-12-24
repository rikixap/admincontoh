import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './navbar';

class Editpartner extends Component{
	render(){
		return(
			 <div className="admin_editstudent" >
                <Navbar/>
            <div className="col-11 mx-auto my-3">
                <div className="text-center">
                    <h1 className="font-weight-bold">AddNew Patner</h1>
                </div>
                <hr className="w-100" />
                <div className="d-flex border p-3 rounded justify-content-between">
                    <div className="col-2">
                        <div className="border p-3 rounded text-center user-image d-flex align-items-center justify-content-center">
                          	<FontAwesomeIcon icon="user-alt" className="fas fa-6x"/>      
                        </div>
                        <p className="text-muted text-center">Click to browse a file</p>
                    </div>
                        <div className="col-9 py-3">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-sm-2 col-form-label">partner name:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="name" name="partner_name" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="institution" className="col-sm-2 col-form-label">partner institution:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id="institution" name="partner_institution" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="testimoni" className="col-sm-2 col-form-label">Testimoni:</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control" rows="5" id="testimoni" name="testimoni"></textarea>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="button" className="btn btn-danger" >Add Student</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
            </div>
			)
	}
}

export default Editpartner;