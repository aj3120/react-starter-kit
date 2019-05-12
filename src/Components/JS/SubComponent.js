import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {testAction} from '../../Redux/Actions/testAction';
const mapStateToProps=(state)=>{
    return({test:state.testReducer.test_data})
}
const mapDispatchToProps=(dispatch)=>{
    return({
        action:bindActionCreators({testAction},dispatch)
    })
}    
class Sub extends Component{
    componentDidMount(){
        this.props.action.testAction({name:'hello'})
    }
    render(){
        return(
            <div>
                Sub :{this.props.test}
            </div>    
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Sub)