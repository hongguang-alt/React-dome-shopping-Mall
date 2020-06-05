import React,{Component} from "react"
import './index.css'
import Statistic from "service/statistic-service.jsx"
const _statistic = new Statistic()
import PageTitle from 'component/pageTitle/index.jsx'
import MUtil from "util/mm.jsx"
const _mm = new MUtil()
import {Link} from 'react-router-dom'

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            userCount:"-",
            productCount:"-",
            orderCount:"-"
        }
    }
    componentDidMount(){
        _statistic.homeData().then(value=>{
            this.setState(value)
        },error=>{
            _mm.errorTips(error)
        })
    }
    render(){
        const {userCount,productCount,orderCount } = this.state
        return (
            <div id="page-wrapper">
                <PageTitle title="首页"/>
                <div className="row">
                    <div className="col-md-4 ">
                        <Link className="content green" to='/user'>
                            <div className="title">{userCount}</div>
                            <p>
                              <i className="fa fa-user fa-fw"></i>
                              <span>用户</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4 ">
                    <Link className="content blue" to='/product'>
                        <div className="title">{productCount}</div>
                        <p>
                          <i className="fa fa-cart-arrow-down"></i>
                          <span>商品</span>
                        </p>
                    </Link>
                </div>
                    <div className="col-md-4 ">
                    <Link className="content red" to='/order'>
                        <div className="title">{orderCount}</div>
                        <p>
                            <i className="fa fa-check-square"></i>
                            <span>订单</span>
                        </p>
                    </Link>
                </div>
                </div>
            </div>
        )
    }
}

export default Home