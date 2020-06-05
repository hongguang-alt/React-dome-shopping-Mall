import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
// import 'static/css/index.css'
import 'static/css/init.css'
// import 'static/css/my.scss'
import Home  from "page/home/index.jsx"
import Login from "page/login/index.jsx"
import UserList from "page/user/index.jsx"

import Layout from "component/layout/index.jsx"
import ErrorPage from "page/errorPage/index.jsx"
import { BrowserRouter as Router ,Switch ,Route , Redirect } from "react-router-dom"


class App extends Component{
    render(){
        return (
            <Router>
             <Switch>
                <Route exact path='/login' component={Login}></Route>
                <Route  path='/' render={()=>{
                    return(
                        <Layout>
                        <Switch>
                            <Route exact path='/' component={Home}></Route>
                            <Route exact path='/productHead' component={Home}></Route>
                            <Route exact path='/product' component={Home}></Route>
                            <Route exact path='/product/cate' component={Home}></Route>
                            <Route exact path='/orderHead' component={Home}></Route>
                            <Route exact path='/order' component={Home}></Route>
                            <Route exact path='/userHead' component={UserList}></Route>
                            <Route exact path='/user' component={UserList}></Route>
                            <Route component={ErrorPage}></Route>
                        </Switch>
                    </Layout>
                    )
                }}></Route>
             </Switch>
            </Router>
        )
    }
}
 
ReactDOM.render(
    <App />,document.getElementById("root")
)