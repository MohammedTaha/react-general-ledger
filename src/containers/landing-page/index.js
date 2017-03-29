import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import AppRouter from '../../AppRouter';
import * as custComponents from '../../components';
import {connect} from 'react-redux';
import {UIActs} from '../../actions';

function mapStatetoProps(state){
    return {};
}
function mapDispatchtoProps(dispatch){

    return {
        showSignInForm : ()=>{ dispatch(UIActs.showLoginForm()); }
    }
}


class LandingPage extends Component{

    clickHandler(optName){
        console.log("Inside click handler ", optName);
        if(optName==='Sign in'){
            this.props.showSignInForm();
        }
    }
    render(){
        return (
            <MuiThemeProvider>
                <div>
                <AppBar 
                    className="AppBar animated fadeIn" 
                    title="The name of this app" 
                    iconStyleLeft={{display:'none'}} 
                    iconElementRight={ 
                        <custComponents.AppBarOpts clickHandler={this.clickHandler.bind(this)}/>
                    }
                    />
                <AppRouter/>
                </div>
            </MuiThemeProvider>

        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(LandingPage);