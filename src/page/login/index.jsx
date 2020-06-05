import React, { Component } from 'react'
import "./index.css"
import MUtil from "util/mm.jsx"
const _mm = new MUtil()
import User from 'service/user-service.jsx'
const _user = new User()
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:"",
            redirect:_mm.getUrlParam("redirect") || "/"
        }
    }
    componentDidMount(){
        document.title="首页"
    }
    InputChange(e){
        let value = e.target.value,
            InputName = e.target.name
        this.setState({
            [InputName]:value
        })
    }
    InputKeyUp(e){
        if(e.keyCode == 13){
            this.onSubmit()
        }
    }
    onSubmit(){
        let loginInfo = { username:this.state.username,password:this.state.password},
            checkResult = _user.checkLogin(loginInfo)
        if(checkResult.status){
            _user.login(loginInfo).then((value)=>{
                _mm.setStorage("userInfo",value)
                this.props.history.push(this.state.redirect)
            })
            .catch((errorMsg)=>{
                _mm.errorTips(errorMsg);
            })
        }else{
            _mm.errorTips(checkResult.msg);
        }
       
    }
    render(){
       return(
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-primary panel-top">
                    <div className="panel-heading panel-font">登陆界面</div>
                    <div className="panel-body">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label htmlFor="inputEmail3" className="col-sm-3 control-label">用户名:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="inputEmail3" name="username" placeholder="请输入用户名" onChange={this.InputChange.bind(this)} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail4" className="col-sm-3 control-label">密码:</label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="inputEmail4" name="password" placeholder="请输入密码"  onChange={this.InputChange.bind(this) } onKeyUp={this.InputKeyUp.bind(this)}/>
                                </div>
                            </div>
                        </form>
                        <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-10">
                                    <button className="btn btn-primary " onClick={ this.onSubmit.bind(this) }>登陆</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
       )
    }
}

export default Login