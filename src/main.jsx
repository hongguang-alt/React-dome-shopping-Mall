import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './my.scss'
import 'font-awesome/css/font-awesome.min.css'
class App extends Component{
    render(){
        return (
            <div>
                Hello world!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,document.getElementById("root")
)