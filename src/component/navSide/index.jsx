import React,{ Component } from 'react'
import { Link ,NavLink} from "react-router-dom"


class NavSide extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav" id="main-menu">
                    <li>
                        <NavLink to="/" exact activeClassName="active-menu"><i className="fa fa-home"></i> 首页 </NavLink>
                    </li>
                    <li className="active">
                        <NavLink to="/productHead" activeClassName="active-menu"><i className="fa fa-cart-arrow-down"></i> 商品 <span className="fa arrow"></span></NavLink>
                        <ul className="nav nav-second-level collapse in">
                            <li>
                                <NavLink to="/product" exact activeClassName="active-menu">商品管理</NavLink>
                            </li>
                            <li>
                                <NavLink to="/product/cate" exact activeClassName="active-menu">品类管理</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="active">
                    <NavLink to="/orderHead" activeClassName="active-menu"><i className="fa fa-check-square"></i> 订单 <span className="fa arrow"></span></NavLink>
                    <ul className="nav nav-second-level collapse in">
                        <li>
                            <NavLink to="/order" activeClassName="active-menu">订单管理</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="active">
                <NavLink to="/userHead" activeClassName="active-menu"><i className="fa fa-user fa-fw"></i> 用户 <span className="fa arrow"></span></NavLink>
                    <ul className="nav nav-second-level collapse in">
                        <li>
                            <NavLink to="/user" activeClassName="active-menu">用户管理</NavLink>
                        </li>
                    </ul>
                    </li>
                </ul>

            </div>
        </div>
        )
    }
}

export default NavSide