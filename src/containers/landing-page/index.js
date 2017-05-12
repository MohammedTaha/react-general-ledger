import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Snackbar from 'material-ui/Snackbar';
import LinearProgress from 'material-ui/LinearProgress';
import AppRouter from '../../AppRouter';
import * as custComponents from '../../components';
import {connect} from 'react-redux';
import {UIActs} from '../../actions';
import {bindUserAuthEvents, firebaseUser} from '../../firebase/firebaseHandler';


function mapStatetoProps(state){
    return {
        UIStates :  state.UIStates,
        AuthStates : state.AuthStates
    };
}
function mapDispatchtoProps(dispatch){

    return {
        showFormOnHome : (formName)=>{ dispatch(UIActs.showFormOnHome(formName)); },
        signoutCurrentUser : () => { 
            dispatch(firebaseUser.signoutCurrentUser());
        },
        checkLoggedInUser: ()=>{
            dispatch(UIActs.showLoadingGIF());
            dispatch(bindUserAuthEvents());
        },
        notificationMsgSnackbarClosed : ()=>{dispatch(UIActs.toggleNotificationMsgSnackbar(null));},
        toggelNavigationDrawer : ()=>{dispatch(UIActs.toggelNavigationDrawer()); }
    }
}


class LandingPage extends Component{

    clickHandler(optName){
        let formType = "";
        switch(optName){
            case 'Sign in':
                formType = "SIGNIN_FORM";
                break;
            case 'Sign up':
                formType = "SIGNUP_FORM";
                break;
            case 'Sign out':
                formType = "INTRO_FORM";
                this.props.signoutCurrentUser();
                break;
            default:
                break;
        }
        if(formType){
            this.props.showFormOnHome(formType);
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
                            title={"Welcome "+ (this.props.AuthStates.signedInUser && this.props.AuthStates.signedInUser.displayName ? this.props.AuthStates.signedInUser.displayName : " to APP NAME")} 
                            onLeftIconButtonTouchTap={this.props.toggelNavigationDrawer.bind(this)}
                            iconStyleLeft={{display : (this.props.AuthStates.signedInUser && this.props.AuthStates.signedInUser.displayName ? 'block': "none")}} 
                            iconElementRight={ 
                                <custComponents.AppBarOpts opts={this.props.UIStates.menuOpts} clickHandler={this.clickHandler.bind(this)}/>
                            }
                        />

                        { this.props.UIStates.showLoadingGif ? <LinearProgress mode="indeterminate" /> : ""}
                        
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