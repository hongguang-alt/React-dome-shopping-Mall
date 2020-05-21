import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
// import 'static/css/index.css'
import 'static/css/init.css'
// import 'static/css/my.scss'
import Home  from "page/home/index.jsx"
import Layout from "component/layout/index.jsx"
import { BrowserRouter as Router ,Switch ,Route ,Link, Redirect } from "react-router-dom"


class App extends Component{
    render(){
        return (
            <Router>
              <Layout>
                <Switch>
                  <Route exact path='/' component={Home}></Route>
                  <Redirect from= "*"  to="/" />
                </Switch>
              </Layout>
            </Router>
        )
    }
}
 
ReactDOM.render(
    <App />,document.getElementById("root")
)