import React,{Component} from 'react'
import RcPagination from 'rc-pagination';
import "rc-pagination/assets/index.css"
import "rc-pagination/assets/index.less"

class Pagination extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <RcPagination   showQuickJumper className="ant-pagination"
        showSizeChanger hideOnSinglePage {...this.props}/>
    }
}

export default Pagination