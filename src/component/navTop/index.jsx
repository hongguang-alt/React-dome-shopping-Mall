import React,{Component} from "react"

class NavTop extends Component{
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
                            <span>欢迎，admin</span>
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a href="#">
                        <i className="fa fa-sign-out fa-fw"></i>
                           <span>Logout</span>
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