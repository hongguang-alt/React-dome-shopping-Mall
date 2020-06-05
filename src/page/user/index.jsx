import React,{Component} from "react"
import './index.css'
import PageTitle from 'component/pageTitle/index.jsx'
import Pagination from 'component/pagination/index.jsx'
import User from 'service/user-service.jsx'
const _user =new User()
import MUtil from "util/mm.jsx"
const _mm = new MUtil()

class UserList extends Component{
    constructor(){
        super()
        this.state={
            list:[],
            pageNum:1,
            hasList:true
        }
    }
    componentDidMount(){
        this.getUserData()
    }
    getUserData(){
        _user.getUserData(this.state.pageNum).then(value=>{
            this.setState(value,()=>{
                this.setState({hasList:false})
            })
            // console.log(this.state)
        },err=>{
            _mm.errorTips(err)
        })
    }
    onChangePage(pageNum){
        this.setState({pageNum:pageNum},()=>{
            this.getUserData()
        })
    }
    render(){
        let table = ( 
            this.state.list.map((item,index)=>{
                return (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{new Date(item.updateTime).toLocaleDateString()}</td>
                     </tr>
                )
            })
            )
        let ErrorTable = <tr ><td colSpan="5" >{this.state.hasList ? "正在加载中..." : "没有数据..."}</td></tr>
        let tableList = this.state.list.length>0 ? table : ErrorTable
        return (
            <div id="page-wrapper">
                <PageTitle title="用户列表"/>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                             <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>用户名</th>
                                    <th>邮箱</th>
                                    <th>电话</th>
                                    <th>创建时间</th>
                                </tr>
                             </thead>
                             <tbody>
                                {tableList}
                             </tbody>
                         </table>
                            <Pagination current={this.state.pageNum} total={this.state.total} onChange={(pageNum)=> this.onChangePage(pageNum)}/>
                        </div>
                </div>
            </div>
        )
    }
}

export default UserList