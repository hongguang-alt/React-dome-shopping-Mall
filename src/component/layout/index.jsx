import React,{Component} from 'react'
import "./theme.css"
import NavSide from 'component/navSide/index.jsx'
import NavTop from 'component/navTop/index.jsx'


class Layout extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="wrapper">
                <NavTop />
                <NavSide />
                {this.props.children}
            </div>
        )
    }
}

export default Layout