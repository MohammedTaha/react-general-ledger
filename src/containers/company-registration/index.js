import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as custComponents from '../../components';
import {UIActs} from '../../actions';
import {firebaseCompanies} from "../../firebase/firebaseHandler"

function mapStatetoProps(state){
    return {
        UIStates : state.UIStates,
        AuthStates : state.AuthStates,
        LedgerStates : state.LedgerStates
    };
}

function mapDispatchtoProps(dispatch){
    return {
        toggelNavigationDrawer : ()=>{ dispatch( UIActs.toggelNavigationDrawer() ); },
        registerCompany : (loggedInUserID, companyDetails) => { dispatch( firebaseCompanies.registerNewCompany(loggedInUserID, companyDetails) ); },
        getRegisteredCompanies : (uid) =>{ dispatch( firebaseCompanies.getRegisteredCompanies(uid)); }
    }
}
class CompanyRegistration extends Component{

    loggedInUserID = "";
    componentDidUpdate(changedState){
        if(!this.loggedInUserID && changedState && changedState.AuthStates && changedState.AuthStates.signedInUser && changedState.AuthStates.signedInUser.uid){
            this.loggedInUserID = changedState.AuthStates.signedInUser.uid;
            this.props.getRegisteredCompanies(changedState.AuthStates.signedInUser.uid);
        }
    }

    render(){
        return (
            <div className="companyRegistrationPage"> 
                <custComponents.NavDrawer 
                    isOpen={this.props.UIStates.navigationgationDrawerVisibility}
                    menuLinks={this.props.UIStates.menuLinks}
                    fn_close={this.props.toggelNavigationDrawer.bind(this)} 
                />
                <custComponents.CompanyRegistrationForm registerCompany={this.props.registerCompany.bind(this, this.loggedInUserID)} />
            </div>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(CompanyRegistration);