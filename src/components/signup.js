import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupAction } from '../store/action/action';
import { Link } from 'react-router-dom'
import "../App.css"
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


const style = {
    height: "auto",
    width: 350,
    margin: 20,
    padding: "10px",
    textAlign: 'center',
    display: 'inline-block',
};


const style1 = {
    margin: 12,
};


const floatingLabelStyle = {
    textAlign : 'left'
}


class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            userName: '',
            password: '',
            confirmPassword: '',
            number: '',
            gender: '',
        }
        this._onChangeUserName = this._onChangeUserName.bind(this);
        this._onChangeEmail = this._onChangeEmail.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);
        this.confirmPassword = this.confirmPassword.bind(this)
        this._onChangenumber = this._onChangenumber.bind(this);
        this.signup = this.signup.bind(this);
    }

    handleChange = (event, index, value) => this.setState({ gender: value });

    signup() {
        let user = {
            email: this.state.email,
            username: this.state.userName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            number: this.state.number,
            gender: this.state.value

        }
        this.setState({
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            number: '',
            value: '',
        })
        if (this.state.password === this.state.confirmPassword) {
            this.props.signupwithEmailPassword(user);
        }
        else{
            alert("Password Does not Match")
        }
    }



    _onChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }


    _onChangeUserName(event) {
        this.setState({
            userName: event.target.value
        })
    }


    _onChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }


    _onChangenumber(event) {
        this.setState({
            number: event.target.value
        })
    }

    confirmPassword(event) {
        this.setState({
            confirmPassword: event.target.value
        })
    }


    render() {
        return (
            <div>

                <div className="box">

                    <Paper style={style} zDepth={5}>

                        <div >

                            <h1>Create Account</h1>

                            <TextField hintText="Type your name here..." floatingLabelText="User Name" type='text' name='username' value={this.state.userName} onChange={this._onChangeUserName} required />
                            <br />

                            <TextField hintText="Type your email address here..." floatingLabelText="Email" type='email' name='email' value={this.state.email} onChange={this._onChangeEmail} required />
                            <br />

                            <TextField hintText="Type your password here..." floatingLabelText="Password" type='password' name='password' value={this.state.password} onChange={this._onChangePassword} required />
                            <br />

                            <TextField hintText="Confirm your password here..." floatingLabelText="Confirm Password" type='password' name='confirmPassword' value={this.state.confirmPassword} onChange={this.confirmPassword} required />

                            <br />

                            <TextField hintText="(+92)XXXXXXXXX" floatingLabelText="Contact No." >
                                <input type='text' name='number' value={this.state.number} onChange={this._onChangenumber} required />
                            </TextField>
                            <br />


                            <SelectField
                                floatingLabelText="Gender"
                                value={this.state.gender}
                                onChange={this.handleChange}
                                style={floatingLabelStyle}>
                                <MenuItem value={'male'} primaryText="Male" />
                                <MenuItem value={'female'} primaryText="Female" />
                                <MenuItem value={'other'} primaryText="other" />
                            </SelectField>


                            <RaisedButton label="Signup" primary={true} style={style1} onClick={this.signup} />
                            <br />

                            <Link to="/">
                                <RaisedButton label="For Sign in Click here...." secondary={true} style={style1}>
                                </RaisedButton>
                            </Link>

                        </div>

                    </Paper >

                </div>

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
        signupwithEmailPassword: (userDetails) => {
            dispatch(signupAction(userDetails));
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Signup);

