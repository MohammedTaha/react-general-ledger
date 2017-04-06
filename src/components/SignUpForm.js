import React, {Component} from 'react';
import {Card, CardText, CardActions} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

class SignInForm extends Component {


    constructor(props){
        super(props);
        this.state = {userName : "", displayName :"", password : "", reconfirmPassword : ""};
    }

    handleChange(fieldName, eve, newVal){
        let newState = {};
        newState[fieldName] = newVal;
        this.setState(newState);
    }

    makeSignUpAttempt(){
        let user = this.state;
        if(user.password===user.reconfirmPassword){
            this.props.makeSignUpAttempt(user);
        }
    }
    render() {
        return (
            <Card className="animated flipInX signUpFormCard">
                <CardText>
                    <h1>
                        Sign Up please 
                    </h1>
                    <div className="signUpFormFields">
                        <TextField value={this.state.userName} onChange={this.handleChange.bind(this, 'userName')} name='userName' hintText="User Name" fullWidth={true} floatingLabelText="Your user name" /><br />
                        <TextField value={this.state.displayName} onChange={this.handleChange.bind(this, 'displayName')} name='displayName' hintText="Complete Name" fullWidth={true} floatingLabelText="Your complete name" /><br />
                        <TextField value={this.state.password} onChange={this.handleChange.bind(this, 'password')} name='password' hintText="Password"  fullWidth={true} floatingLabelText="Your password" type="password"/><br />
                        <TextField value={this.state.reconfirmPassword} onChange={this.handleChange.bind(this, 'reconfirmPassword')} name='password' hintText="Password"  fullWidth={true} floatingLabelText="Reconfirm password" type="password"/><br />
                    </div>
                </CardText>
                <CardActions className="rightAlignedElems">
                    <FlatButton onClick={this.makeSignUpAttempt.bind(this)} label="Sign in" />
                </CardActions>
            </Card> 
        );
    }
}

export default SignInForm;