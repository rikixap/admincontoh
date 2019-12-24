import React, {Component} from 'react';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './department.css';
import axios from 'axios';

class Department extends Component{
	constructor(){
		super()
		this.state ={
			data_departments:[],
			edit:false,
			data_file:'',
			data_description:''
		}
	}
		componentDidMount () {
        this.getData()
    }
		getData() {
			axios.get('http://showreeldoes-backend.herokuapp.com/v1/departments').then(response => {
				console.log(response)
				this.setState({data_departments: response.data.departments})
			})
		}

	render(){
		return(
			<div className="department-admin">
			   <Navbar />
				<div className="col-11 mx-auto">
					{this.state.data_departments.map((data,i) =>{
							return(
						<div key={i}>
							{i % 2 == 0 ?  	
							<div  className="left_card" >
								<h4>{data.title}</h4>
								<div className="left_list">
									<div className="depart_img">
									  <img src={data.image} />
									</div>  
									 <div className="left_detail">
	                                       <p>{data.description}</p>           
	                                  </div>
								</div>
								  <div className="text-right">
                                      <FontAwesomeIcon  icon ="pencil-alt" className="text-muted"/>
                                  </div>
							</div>
							:
							<div className="right_card">
								<h4 className="text-right">{data.title}</h4>
								<div className="right_list">
									<div className="right_detail">
	                                       <p>{data.description}</p>           
	                                </div>
	                                <div className="depart_img_right">
									 	 <FontAwesomeIcon icon="camera-retro"  className="text-muted fa-2x"  />
									</div> 
								</div>
								 <div>
                                     <FontAwesomeIcon icon ="pencil-alt" className="text-muted" />
                                 </div>
							</div>
							}
						</div>
								)
						})}
				</div>
			</div>
			)
	}
}

export default Department;