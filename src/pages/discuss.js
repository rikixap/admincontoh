import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from './navbar';
import axios from 'axios';

class Admindiscuss extends Component {
      constructor() {
        super () 
        this.state = {
            data_discuss: []
        }
    }
     componentDidMount() {
        var Discuss = []
        axios.get("https://showreeldoes-backend.herokuapp.com/v1/discusses").then(response => {
            console.log('ini response',response)
            this.setState({data_discuss: response.data.discusses})
        })

    }
  
     linkAddDiscuss() {
        this.props.history.push('/adddiscuss')
    }

    render() {
        return(
            <div className="admin_discuss" >
                 <Navbar />
                <div>
                    <h1 className="text-center">Discuss</h1>
                    <hr className="w-75"/>
                </div>
                <div className="col-11 mx-auto">
                    <FontAwesomeIcon icon ="plus-circle" className="fas fa-plus-circle fa-2x text-info" onClick={() => this.linkAddDiscuss()}/>
                        <table className="table table-striped">
                        <thead>
                            <tr className="bg-dark text-light text-center">
                                <th>NO</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                            <tbody>
                                {this.state.data_discuss.map((discuss,i)=> {
                                    return(
                                <tr key={i}>
                                    <td  scoped="row">{i + 1}</td>
                                    <td>{discuss.name}</td>
                                    <td>{discuss.email}</td>
                                    <td>{discuss.subject}</td>
                                    <td>{discuss.message}</td>
                                    <td className="text-center">
                                        <FontAwesomeIcon icon ="envelope" className="envlope" />
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

export default Admindiscuss;