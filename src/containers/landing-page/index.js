import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import LinearProgress from 'material-ui/LinearProgress';
import AppRouter from '../../AppRouter';
import * as custComponents from '../../components';
import {connect} from 'react-redux';
import {UIActs} from '../../actions';
import {bindUserAuthEvents} from '../../firebase/firebaseHandler';


function mapStatetoProps(state){
    return {
        UIStates :  state.UIStates
    };
}
function mapDispatchtoProps(dispatch){

    return {
        showSignInForm : ()=>{ dispatch(UIActs.showFormOnHome('SIGNIN_FORM')); },
        showSignUpForm : ()=>{ dispatch(UIActs.showFormOnHome('SIGNUP_FORM')); },
        checkLoggedInUser: ()=>{
            dispatch(UIActs.showLoadingGIF());
            dispatch(bindUserAuthEvents());
        },
        notificationMsgSnackbarClosed : ()=>{ dispatch(UIActs.toggleNotificationMsgSnackbar(null));}
    }
}


class LandingPage extends Component{

    clickHandler(optName){
        if(optName==='Sign in'){
            this.props.showSignInForm();
        }
        else if(optName==='Sign up'){
            this.props.showSignUpForm();
        }
    }
    componentDidMount(){
        this.props.checkLoggedInUser();
    }
    handleSnackbarRequestClose(){
        this.props.notificationMsgSnackbarClosed();
    }

    render(){
        return (
            <MuiThemeProvider>
                <div>
                    <div className='AppBarContainer'>
                        <AppBar 
                            className="AppBar animated fadeIn" 
                            title="The name of this app" 
                            iconStyleLeft={{display:'none'}} 
                            iconElementRight={ 
                                <custComponents.AppBarOpts opts={this.props.UIStates.menuOpts} clickHandler={this.clickHandler.bind(this)}/>
                            }
                        />
                        { this.props.UIStates.showLoadingGif ? <LinearProgress mode="indeterminate" /> : ""}
                        <br/>
                        <br/>
                        <Snackbar
                            open={this.props.UIStates.notificationMsg && this.props.UIStates.notificationMsg.text ? true : false}
                            message={this.props.UIStates.notificationMsg.text}
                            autoHideDuration={this.props.UIStates.notificationMsg.duration}
                            onRequestClose={this.handleSnackbarRequestClose.bind(this)}
                        />    
                    </div>
                    <AppRouter/>
                </div>
            </MuiThemeProvider>

        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(LandingPage);