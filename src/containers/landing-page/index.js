import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import LinearProgress from 'material-ui/LinearProgress';
import AppRouter from '../../AppRouter';
import * as custComponents from '../../components';
import {connect} from 'react-redux';
import {UIActs} from '../../actions';


function mapStatetoProps(state){
    return {
        UIStates :  state.UIStates
    };
}
function mapDispatchtoProps(dispatch){

    return {
        showSignInForm : ()=>{ dispatch(UIActs.showLoginForm()); },
        showSignUpForm : ()=>{ dispatch(UIActs.showSignUpForm()); },

    }
}


class LandingPage extends Component{

    clickHandler(optName){
        console.log("Inside click handler ", optName);
        if(optName==='Sign in'){
            this.props.showSignInForm();
        }
        else if(optName==='Sign up'){
            this.props.showSignUpForm();
        }
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
                                <custComponents.AppBarOpts clickHandler={this.clickHandler.bind(this)}/>
                            }
                        />
                        { this.props.UIStates.showLoadingGif ? <LinearProgress mode="indeterminate" /> : ""}

                    </div>
                    <AppRouter/>
                </div>
            </MuiThemeProvider>

        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(LandingPage);