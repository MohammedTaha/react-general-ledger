import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as custComponents from '../../components';
import {firebaseUser} from '../../firebase/firebaseHandler'

function mapStatetoProps(state){
    return {
        UIStates :  state.UIStates
    };
}

function mapDispatchtoProps(dispatch){
    return {
        attemptToSignUp : (data)=>{ 
            dispatch(firebaseUser.attemptToSignUp(data));
        },
        attemptToSignIn : (data)=>{ 
            dispatch(firebaseUser.attemptToSignIn(data));
        }
    }
}



class Home extends Component {

    makeSignInAttempt(data){
        this.props.attemptToSignIn(data);
    }
    makeSignUpAttempt(data){
        this.props.attemptToSignUp(data);
    }
    componentDidMount(){
        /*setTimeout(()=>{
            this.props.history.push('/404');
        }, 3000);*/
    }
    render() {
        return (
            <div className='homePage'>
                <div className='hero-01'> 
                    <section className='containerAppIntro'>
                        {
                            this.props.UIStates.activeFormType==='SIGNIN_FORM'?
                            <custComponents.SignInForm makeSignInAttempt={this.makeSignInAttempt.bind(this)}/> :
                            (
                                this.props.UIStates.activeFormType==='SIGNUP_FORM' ? 
                                <custComponents.SignUpForm makeSignUpAttempt={this.makeSignUpAttempt.bind(this)}/> :
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