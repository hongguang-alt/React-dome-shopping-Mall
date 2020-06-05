import React,{Component} from "react"
import './index.css'
import { Link } from "react-router-dom"
import PageTitle from 'component/pageTitle/index.jsx'

class ErrorPage extends Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div id="page-wrapper">
                <PageTitle title="出错"/>
                <div className="row">
                    <div className="col-md-12">
                        <span>路径出错了！</span>
                        <Link to="/">点我返回首页</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorPage