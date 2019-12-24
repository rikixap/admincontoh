import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './dashboard.css';
import Navbar from './navbar';
import axios from 'axios';


class Dashboard extends Component{
	constructor(){
		super()
		this.state = {
			// about: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
			founder : 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
			// editFounder:false,
			dataAbout: {},
			id_about: '',
			id_about: '',
			 about: '',
			editAbout: false,
			editFounder:false,		}

	}
	

	  componentDidMount () {
        //  axios.get('http://backend-beli.herokuapp.com/product/7uYYSg0Yjya44BqlGGJi').then(response => {
            //      console.log(response)
            //      this.setState({dataAbout: response.data.result})
            //  })
        this.getDataAbout()
    }
     getDataAbout() {
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/abouts').then(response => {
            console.log(response)
            this.setState({
                dataAbout: response.data.abouts[0],
                about: response.data.abouts[0].content,
                fileAbout: response.data.abouts[0].image,
                id_about: response.data.abouts[0]._id
            });
        });        
    }

	chooseAbout() {
        this.refs.uploadabout.click()
    }
	fileAbout(value){
		  if(value.target.files[0]) {
            let file = value.target.files[0]
            let data = new FormData()
            data.append('images', file)
            data.append('nameImage', file)
            let params = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            this.setState({pic: true})
            axios.post('https://showreeldoes-backend.herokuapp.com/v1/upload', data, params).then(res=> {
                console.log(res.data.created.cloudImage[0])
                this.setState({fileAbout: res.data.created.cloudImage[0]})
                this.setState({pic: false})
    
            })
        }
	}

	chooseFounder() {
		this.refs.uploadfounder.click()
	}
	fileFounder(value) {
		console.log(value.target.file[0])
	}
	editFounder(){
		this.setState({editFounder: true})
	}
	 handleText (value) {
        this.setState({[value.target.name]: value.target.value})
    }

    cancelEditFounder(){
    	this.setState({editFounder:false})
    }
    editAbout(){
    	this.setState({editAbout: false})
    }
    cancelEditAbout(){
    	this.setState({editAbout:false})
    }
  
	render(){
		return(
			<div className="dashboard-admin">
				<Navbar />
				<div  className="col-11 p-0 mx-auto">
					<div className="about_wrapper">

				 <div className="about_card">
					<h4>About</h4>
					
					<div className="about_list">
						{this.state.editAbout == true ? 
						<div className="about_img">
							{this.state.editAbout == true ?
								 <div className="spinner-border" role="status">
		                              <span className="sr-only">Loading...</span>
		                         </div>
                        	 :
                        	 <div>
							  <img src={this.state.fileAbout} className="img-about"  onClick={()=> this.chooseAbout()}/>
							   <input type="file" className="d-none" ref="uploadabout" onChange={this.fileAbout.bind(this)} />
							</div>
							}	
						</div>
						:
						<div className="about_img">
                            <img src={this.state.dataAbout.image} className="img-about" />
                        </div>
                    	}

						<div className="about_detail">
	              	 	{this.state.editAbout == true ?
	              	 		<textarea  className="form-control" rows="6" value={this.state.about} onChange={this.handleText.bind(this)} name="about" >{this.state.about}</textarea>
	              	 		:
	              	  	  <p>{this.state.dataAbout.content}}</p>	
	              	 	}
	              	  </div>

					</div>
						{this.state.editAbout === true ?
						<div className="text-right col-3 ml-auto  d-flex">
							<button className="btn btn-sm btn-outline-info mr-3">
							  	<FontAwesomeIcon icon ="save"  onClick={() => this.cancelEditAbout()}/>Save	
							</button>
							<button className="btn btn-sm btn-outline-danger" onClick={() => this.cancelEditAbout()}>
			              		<FontAwesomeIcon icon ="window-close" />Cancel
			              	 </button>
						</div>		
						:
						<div className="text-right">
		                     <FontAwesomeIcon icon ="pencil-alt" className="text-muted"  onClick={() => this.editAbout()}/>
		                </div>
						}
				 </div> 



	              <div className="founder_card">
	              	<h4 className="text-right">Founder</h4>
	              	<div className="founder_list">
	              	  <div className="founder_detail">
	              	 	{this.state.editFounder == true ?
	              	 		<textarea  className="form-control" rows="6" value={this.state.founder} onChange={this.handleText.bind(this)} name="founder" >{this.state.founder}</textarea>
	              	 		:
	              	  	  <p>{this.state.founder}</p>	
	              	 	}
	              	  </div>
	              	  <div className="founder_img">
	              	  	 <FontAwesomeIcon icon="camera-retro" className="text-muted fa-2x " onClick={() => this.chooseFounder()} />
	              	  	 <input type="file" className="d-none" ref="uploadfounder" onChange={this.fileFounder.bind(this)}/>
	              	  </div>
	              	</div>
			              	{this.state.editFounder === true ?
			              		<div  className="d-flex col-5">
			              			<button className="btn btn-sm  btn-outline-info mr-3">
			              				<FontAwesomeIcon icon ="save"  onClick={() => this.cancelEditFounder()}/>Save
			              			</button>
			              			<button className="btn btn-sm btn-outline-danger" onClick={() => this.cancelEditFounder()}>
			              				 <FontAwesomeIcon icon ="window-close" />Cancel
			              			</button>
			              		</div>
			              		:

				              	<div className="text-left">
				                     <FontAwesomeIcon icon ="pencil-alt" className="text-muted" onClick={() => this.editFounder()}/>
				                </div>
			              	}
			        </div>
					</div>

				</div>
	         </div>

			)
	}
}

export default Dashboard;