import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { signinAction } from '../store/action/action';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import "../App.css"
import TextField from 'material-ui/TextField';


const style = {
    height: "auto",
    width: 350,
    margin: 10,
    padding: "10px",
    textAlign: 'center',
    display: 'inline-block',
};

const style1 = {
    margin: 12,
};



class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.signin = this.signin.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);
    }



    signin() {
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            email: '',
            password: ''
        })
        this.props.signinWithEmailPassword(user);
    }


    _onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }


    _onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }


    render() {
        return (
            <div>

                <div className="box">

                    <Paper style={style} zDepth={5}>


                        <h1>Signin Here....</h1>

                        <TextField hintText="Type your email here..." floatingLabelText="email" type='email' name='email' value={this.state.email} onChange={this._onChangeEmail} required />
                        <br />

                        <TextField hintText="Type your password here..." floatingLabelText="Password" type='password' name='password' value={this.state.password} onChange={this._onChangePassword} required />
                        <br /><br />

                        <RaisedButton label="Signup" primary={true} style={style1} onClick={this.signin} />
                        <br />

                        <Link to="/signup">
                            <RaisedButton label="Create Account" secondary={true} style={style1}>
                            </RaisedButton>
                        </Link>



                    </Paper >

                </div >

            </div >
        )
    }
}



function mapStateToProp(state) {
    return ({
        // userName: state.root.userName
    })
}




function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        signinWithEmailPassword: (user) => {
            dispatch(signinAction(user))
        }
    })
}



export default connect(mapStateToProp, mapDispatchToProp)(Signin);