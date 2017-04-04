import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as custComponents from '../../components';
import {UIActs} from '../../actions';
import {firebaseAuth} from '../../firebase';


function mapStatetoProps(state){
    return {
        UIStates :  state.UIStates
    };
}

function mapDispatchtoProps(dispatch){
    return {
        attemptToSignUp : (data)=>{ 
            dispatch(UIActs.showLoadingGIF()); 
            firebaseAuth.createUserWithEmailAndPassword(data.userName, data.password)
                .then((success)=>{
                    console.log("Sign up success ", success);
                    dispatch(UIActs.hideLoadingGIF()); 
                })
                .catch((err)=>{
                    console.log("Sign up err ", err );
                    dispatch(UIActs.hideLoadingGIF()); 
                });
        },
        attemptToSignIn : (data)=>{ 
            dispatch(UIActs.showLoadingGIF()); 
            firebaseAuth.signInWithEmailAndPassword(data.userName, data.password)
                .then((success)=>{
                    console.log("Sign in success ", success);
                    dispatch(UIActs.hideLoadingGIF()); 
                })
                .catch((err)=>{
                    console.log("Sign in err ", err );
                    dispatch(UIActs.hideLoadingGIF()); 
                });
        }
    }
}



class Home extends Component {

    makeSignInAttempt(data){
        console.log(data);
        this.props.attemptToSignIn(data);
    }
    render() {
        return (
            <div className='homePage'>
                <div className='hero-01'> 
                    <section className='containerAppIntro'>
                        {
                            this.props.UIStates.showLoginForm?
                            <custComponents.SignInForm makeSignInAttempt={this.makeSignInAttempt.bind(this)}/> :
                            (
                                this.props.UIStates.showSignUpForm ? 
                                <custComponents.SignUpForm makeSignInAttempt={this.makeSignInAttempt.bind(this)}/> :
                                <custComponents.AppInfoCard/>
                            )                        
                        }
                    </section>
                </div>
                <div className='container_keyFeatures'>

                    <section className="sec_keyFeature"></section>
                    <section className="sec_keyFeature"></section>
                    <section className="sec_keyFeature"></section>
                    <section className="sec_keyFeature"></section>
                    <section className="sec_keyFeature"></section>
                    <section className="sec_keyFeature"></section>

                </div>
                <div className='container_credits'>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);