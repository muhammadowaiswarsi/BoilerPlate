import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
// import {changeUserName} from '../store/action/action';
class Home extends Component {


    render() {
        return (
            <div>
                <h1>Hello World </h1>
                <Link to='/'>Go to About</Link>
            </div>
        )
    }
}

function mapStateToProp(state){
    return({
        // userName: state.root.userName
    })
}
function mapDispatchToProp(dispatch){
    return({
    //     changeUserName: ()=>{dispatch(changeUserName())}
    })
}

export default connect(mapStateToProp,mapDispatchToProp)(Home);

