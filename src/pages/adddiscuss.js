import React, { Component } from 'react';
import Navbar from './navbar';

class Adddiscuss extends Component {
	render(){
		return(
			<div>
				<Navbar />
				 <div className="col-11 mx-auto my-3">
                <div className="text-center">
                    <h1 className="font-weight-bold">Add Discuss</h1>
                </div>
                <hr className="w-100" />
                <div className="d-flex border p-3 rounded justify-content-between">
                        <div className="col-12 py-3">
                            <form>
                                <div className="form-group row">
                                    <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control" id='name' name="name"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="email" className="col-sm-2 col-form-label" >Email:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control"  name="email" id="email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="subject" className="col-sm-2 col-form-label">Subject:</label>
                                    <div className="col-sm-10">
                                            <input type="text" className="form-control"  name="subject" id="subject"/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="message" className="col-sm-2 col-form-label">Message:</label>
                                    <div className="col-sm-10">
                                        <textarea className="form-control" rows="5" id="message" name="message" ></textarea>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <button type="button" className="btn btn-danger" onClick={()=> this.add()}>Add Discuss</button>
                                </div>
                            </form>
                        </div>
                </div>
            </div>
			</div>
			)
	}
}

export default Adddiscuss;