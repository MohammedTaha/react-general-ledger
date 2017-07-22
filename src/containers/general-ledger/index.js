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
        getSelectedCompany : (uid, companyID) =>{ dispatch( firebaseCompanies.getSelectedCompany(uid, companyID)); }
    }
}
class GeneralLedger extends Component{

    loggedInUserID = "";
    selectedCompanyID = ""
    constructor(props){
        super(props);
        if(props && props.match && props.match.params && props.match.params.companyID){
            this.selectedCompanyID = props.match.params.companyID
        }
    }


    componentDidMount(){
        
        if (!this.loggedInUserID && this.props.AuthStates.signedInUser && this.props.AuthStates.signedInUser.uid) {
            this.loggedInUserID = this.props.AuthStates.signedInUser.uid;
            this.props.getSelectedCompany(this.loggedInUserID, this.selectedCompanyID);
        }

    }

    componentDidUpdate (changedState) {
        if(!this.loggedInUserID && changedState && changedState.AuthStates && changedState.AuthStates.signedInUser && changedState.AuthStates.signedInUser.uid){
            this.loggedInUserID = changedState.AuthStates.signedInUser.uid;
            this.props.getSelectedCompany(this.loggedInUserID, this.selectedCompanyID);
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

                <h1>{this.props.LedgerStates.selectedCompany.name}</h1>

                HELLO COMPANY WALAY;

            </div>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(GeneralLedger);