import React,{Component} from "react"
import User from 'service/user-service.jsx'
const _user = new User()
import MUtil from "util/mm.jsx"
const _mm = new MUtil()

class NavTop extends Component{
    constructor(){
        super()
        this.state={
            username:"" || _mm.getStorage("userInfo").username 
        }
    }
    loginOut(){
        _user.loginOut().then((value,msg)=>{
            window.location.href='/login'
            _mm.removeStorage("userInfo")
        })
    }
    render(){
        return(
            <div className="navbar navbar-default top-navbar" >
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html"><b>W</b>hg
                </a>
            </div>
            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle">
                        <i className="fa fa-user fa-fw"></i>
                            <span>欢迎,{this.state.username}</span>
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li onClick={this.loginOut.bind(this)}><a href="#">
                        <i className="fa fa-sign-out fa-fw"></i>
                           <span >Logout</span>
                        </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        )
    }
}

export default NavTop