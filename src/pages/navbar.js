import React,{ Component } from 'react';
import { Link,withRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import menu from '../images/menu.png';
import './navbar.css';
// import { Nav,NavDropdown } from 'react-bootstrap';


class Navbar extends Component{
	openSidebar() {
		let open = this.refs.sidebarBg
		let close = this.refs.close
		open.style.display = 'block'
		open.style.width = '100%'
		close.style.width='20%'
		close.style.left = '0'
	}

	closeSidebar() {
		let open = this.refs.sidebarBg
		let close = this.refs.close
		open.style.display = 'none'
        close.style.width = '0px'
        close.style.left = '-100px'
        open.style.width = '0px'
	}

	  linkPage (value) {
        if(value === 'dashboard') {
            this.props.history.push('/')
        }else if(value === 'department') {
            this.props.history.push('/department')
        }else if(value === 'studentanimator') {
            this.props.history.push('/studentanimator')
        }else if(value === 'studentcompositor') {
            this.props.history.push('/studentcompositor')
        }else if(value === 'studentprogrammer') {
            this.props.history.push('/studentprogrammer')
        }else if(value === 'student3dmodeler') {
            this.props.history.push('/studentmodeler')
        }else if(value === 'admin') {
            this.props.history.push('/pageadmin')
        }else if(value === 'partner') {
            this.props.history.push('/partner')
        }else if(value === 'discuss') {
            this.props.history.push('/discuss')
        }
    }

	render(){
		return(
			<div>

				<div className="menu_logo p-3">
					<img src={menu} onClick={() => this.openSidebar()}/>
				</div>
				
				<div className="sidebar" ref="close">
					<div className="p-3 text-right">
							<div>
	                            <FontAwesomeIcon icon="times-circle" className="text-light  fas fa-2x"  onClick={() => this.closeSidebar()}/>
	                            <input type="file" className="d-none" ref="uploadfounder" />
	                       </div>     
	                </div>
	                  <hr className="bg-secondary m-0 w-100" />
	                <div>
	                  	<div className="link-page p-3" onClick={() => this.linkPage('dashboard')}>
	                                <Link to="/admin/dashboard"  className="text-light " ref="tes">Dashboard</Link>
	                     </div>
	                     <div className="link-page p-3"  onClick={() => this.linkPage('department')}>
	                                <Link to="/admin/department" className="text-light ">Department</Link>
	                      </div>

	                        <div className="link-page p-3 d-flex justify-content-between align-items-center "  data-toggle="collapse" data-target="#student" aria-expanded="false" aria-controls="student">
                                <p className="text-light m-0">
                                    Student
                                </p>
                                <FontAwesomeIcon icon="sort-down" className="text-light align-self-center" />
                            </div>
                            <div className="collapse" id="student">
                                <div>
                                    <div onClick={() => this.linkPage('studentanimator')}> <Link to="/admin/studentanimator" className="dr-title">Animator</Link></div>
                                    <div onClick={() => this.linkPage('studentcompositor')}> <Link to="/studentcompositor" className="dr-title">Compositor</Link></div>
                                    <div  onClick={() => this.linkPage('studentprogrammer')}><Link to="/studentprogrammer" className="dr-title">Programmer</Link></div>
                                    <div  onClick={() => this.linkPage('student3dmodeler')}><Link to="/studentmodeler" className="dr-title">3D Modeler</Link>  </div>
                                                        
                                </div>
                            </div>



	                         <div className="link-page p-3"  onClick={() => this.linkPage('admin')}>
	                                <Link to="/admin/admin" className="text-light ">Admin</Link>
	                          </div>
	                          <div className="link-page p-3"  onClick={() => this.linkPage('partner')}>
	                                <Link to="/admin/adminpartner" className="text-light ">Partner</Link>
	                           </div>
	                           <div className="link-page  p-3 discuss" onClick={() => this.linkPage('discuss')}>
	                                <Link to="/admin/discuss" className="text-light ">Discuss</Link>
	                            </div>
	                            <hr className="bg-secondary m-0 w-100" />
	                            <div className="link-page text-light p-3 d-flex align-items-center"  >
	                                <FontAwesomeIcon icon ="sign-out-alt" className="text-light " />
	                                <p className="m-0 text">Sign Out</p>
	                            </div>
					</div>
				</div>
			
				 <div className="sidebar_bg" ref="sidebarBg" onClick={() => this.closeSidebar()}>
					
				</div>
			</div>

			)
	}
}


export default withRouter(Navbar);