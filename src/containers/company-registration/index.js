import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as custComponents from '../../components';
import {UIActs} from '../../actions';
import {firebaseCompanies} from "../../firebase/firebaseHandler"

function mapStatetoProps(state){
    return {
        UIStates : state.UIStates
    };
}

function mapDispatchtoProps(dispatch){
    return {
        toggelNavigationDrawer : ()=>{ dispatch( UIActs.toggelNavigationDrawer() ); },
        registerCompany : (companyDetails) => { dispatch( firebaseCompanies.registerNewCompany(companyDetails) ); }
    }
}
class CompanyRegistration extends Component{

    registerCompany(companyDetails){
        console.log(" companyDetails ", companyDetails);
        this.props.registerCompany(companyDetails);
    }
    render(){
        return (
            <div className="companyRegistrationPage"> 
                <custComponents.NavDrawer 
                    isOpen={this.props.UIStates.navigationgationDrawerVisibility}
                    menuLinks={this.props.UIStates.menuLinks}
                    fn_close={this.props.toggelNavigationDrawer.bind(this)} 
                />
                <custComponents.CompanyRegistrationForm registerCompany={this.registerCompany.bind(this)} />
            </div>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(CompanyRegistration);