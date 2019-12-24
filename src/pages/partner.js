import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './navbar';
import axios from 'axios';

class Partner extends Component {

    constructor(){
        super()
        this.state={
            data_partner:[]
        }
    }
   
     componentDidMount() {
        var partner = []
        axios.get("https://showreeldoes-backend.herokuapp.com/v1/partners").then(response => {
            console.log('ini response',response)
            this.setState({data_partner: response.data.partners})
        })

    }
     linkAddPartner() {
        this.props.history.push('/addpartner')
    }

       linkEditPartner () {
        // console.log(data)
        this.props.history.push('/editpartner/')
    }
	render(){
		return(
			<div>
				<Navbar />
				 <div>
                    <h1 className="text-center">Partner</h1>
                    <hr className="w-75"/>
                </div>
                <div className="col-11 mx-auto ">
                	 <FontAwesomeIcon icon ="plus-circle" className="fas fa-plus-circle fa-2x text-info" onClick={() => this.linkAddPartner()}/>
                	 <table  className="table table-striped">
                	 	<thead>
                            <tr className="bg-dark text-light text-center">
                                <th>NO</th>
                                <th>Name</th>
                                <th>Institution</th>
                                <th>Image</th>
                                <th>Testimoni</th>
                                <th>Action</th>
                            </tr>
                        </thead> 

                         <tbody>
                         {this.state.data_partner.map((partner, i) => {
                            return(
            				<tr key={i}>
                                <th  scoped="row">{i + 1}</th>
                                <td>{partner.partner_name}</td>
                                <td>{partner.partner_institution}</td>
                                <td>img.jpg</td>
                                <td>{partner.testimoni}</td>
                                <td>
                                   <div className="d-flex justify-content-around">
                                       <FontAwesomeIcon icon ="pen" className="text-primary" onClick={() => this.linkEditPartner()}/>
                                       <FontAwesomeIcon icon ="trash-alt" className=" text-danger" />
                                   </div>
                                </td>
                            </tr>

                                )

                         })}
                    	</tbody>  
                	 </table>
                </div>	 
			</div>
			)
	}
}

export default Partner;
