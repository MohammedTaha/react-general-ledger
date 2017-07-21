import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as custComponents from '../../components';
import {UIActs} from '../../actions';
import {firebaseCompanies} from "../../firebase/firebaseHandler"
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';



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
    showRegisterNewCompanyForm = false;

    constructor(props){
        super(props);
        this.state = {showRegisterNewCompanyForm : false};
    }

    componentDidMount(){
        
        if (!this.loggedInUserID && this.props.AuthStates.signedInUser && this.props.AuthStates.signedInUser.uid) {
            this.loggedInUserID = this.props.AuthStates.signedInUser.uid;
            this.props.getRegisteredCompanies(this.loggedInUserID);
        }

    }

    componentDidUpdate (changedState) {
        if(!this.loggedInUserID && changedState && changedState.AuthStates && changedState.AuthStates.signedInUser && changedState.AuthStates.signedInUser.uid){
            this.loggedInUserID = changedState.AuthStates.signedInUser.uid;
            this.props.getRegisteredCompanies(this.loggedInUserID);
        }
    }

    registerCompanyEventHandler(loggedInUserID, companyDetails){
        this.props.registerCompany(loggedInUserID, companyDetails);
        setTimeout(()=>{
            this.toggleRegisterFormView();
        }, 2000);
    }

    toggleRegisterFormView (){
        this.showRegisterNewCompanyForm = !this.showRegisterNewCompanyForm;
        this.setState({ showRegisterNewCompanyForm : this.showRegisterNewCompanyForm});
    }
    render(){
        return (
            <div className="companyRegistrationPage"> 
                <custComponents.NavDrawer 
                    isOpen={this.props.UIStates.navigationgationDrawerVisibility}
                    menuLinks={this.props.UIStates.menuLinks}
                    fn_close={this.props.toggelNavigationDrawer.bind(this)} 
                />


                <div className="container_registerNewCompany">
                    <FloatingActionButton onClick={this.toggleRegisterFormView.bind(this)}>
                        {this.state.showRegisterNewCompanyForm ? <ContentRemove /> : <ContentAdd />}
                    </FloatingActionButton>
                </div>

                
                {!this.state.showRegisterNewCompanyForm ? <div className="container_companyDetailsCards"> {this.props.LedgerStates.companies.map( (data, idx)=> {return <custComponents.CompanyDetails key={idx} details={data}/> })} </div>: ""}
                
                <br/><br/><br/>

                {this.state.showRegisterNewCompanyForm ? <custComponents.CompanyRegistrationForm registerCompany={this.registerCompanyEventHandler.bind(this, this.loggedInUserID)} /> : ""}

            </div>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(CompanyRegistration);