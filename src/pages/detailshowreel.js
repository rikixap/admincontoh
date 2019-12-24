import React,{ Component } from 'react';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import showreel from '../images/showreel.jpg';

class Detailshowreel extends Component {
	render(){
		return(
			<div>
				<Navbar />
				<div className="p-0">
					<div className="my-3" >
						 <div className="text-center">
                            <h1>Detail Showreel</h1>
                            <hr className="w-100"/>
                        </div>
                        <div  className="col-11 text-center  mx-auto">
                        	<div className="text-left py-3  d-flex mb-3">
                        		<FontAwesomeIcon icon ="plus-circle" className="fas fa-plus-circle fa-2x mr-2 text-info" />
                                <p className="m-0 align-self-center font-weight-bold" >Add Showreel</p>
                        	</div>
                        	<div className="row p-3">
                        		<div className="col-2 border shadow-sm mr-2 mb-2">
                                        <div className="d-flex justify-content-center text-center" style={{overflow: 'hidden', height:"170px"}}>
                                            <img src={showreel} style={{width: '100%'}} />
                                        </div>
                                        <div>
                                            <p>manusia</p>
                                        </div>
                                        <div className=" p-3">
                                            <button className="btn btn-sm btn-outline-info mr-2" >Edit</button>
                                            <button className="btn btn-sm btn-outline-danger">Delete</button>
                                        </div>
                                 </div>

                        	</div>


						</div>
					</div>
				</div>
			</div>
			)
	}
}

export default Detailshowreel;