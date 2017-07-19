import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as custComponents from '../../components';
import {firebaseUser} from '../../firebase/firebaseHandler'
import {UIActs} from '../../actions';

function mapStatetoProps(state){
    return {
        UIStates :  state.UIStates,
        AuthStates : state.AuthStates
    };
}

function mapDispatchtoProps(dispatch){
    return {
        attemptToSignUp : (data)=>{ 
            dispatch(firebaseUser.attemptToSignUp(data));
        },
        attemptToSignIn : (data)=>{ 
            dispatch(firebaseUser.attemptToSignIn(data));
        },
        toggelNavigationDrawer : ()=>{dispatch(UIActs.toggelNavigationDrawer()); }
    }
}



class Home extends Component {

    makeSignInAttempt(data){
        this.props.attemptToSignIn(data);
    }
    makeSignUpAttempt(data){
        this.props.attemptToSignUp(data);
    }
    navigateUser(route){
        setTimeout(()=>{
            this.props.history.push(route);
        }, 1000);
    }


    render() {        
         return (
             
             <div className='homePage'>

                <custComponents.NavDrawer 
                    isOpen={this.props.UIStates.navigationgationDrawerVisibility}
                    menuLinks={this.props.UIStates.menuLinks}
                    fn_close={this.props.toggelNavigationDrawer.bind(this)} 
                    />

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