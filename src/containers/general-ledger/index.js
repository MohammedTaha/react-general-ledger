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
        getSelectedCompany : (uid, companyID) =>{ dispatch( firebaseCompanies.getSelectedCompany(uid, companyID)); },
        getActiveLedger : (companyID) =>{ dispatch( firebaseCompanies.getLedgerOfSelectedCompany(companyID)); },
        updateLedgerEntry : (companyID, newEntry) =>{ dispatch( firebaseCompanies.updateLedgerEntry(companyID, newEntry)); }
    }
}
class GeneralLedger extends Component{

    loggedInUserID = "";
    selectedCompanyID = "";
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
            this.props.getActiveLedger(this.selectedCompanyID);
        }
    }

    componentDidUpdate (changedState) {
        if(!this.loggedInUserID && changedState && changedState.AuthStates && changedState.AuthStates.signedInUser && changedState.AuthStates.signedInUser.uid){
            this.loggedInUserID = changedState.AuthStates.signedInUser.uid;
            this.props.getSelectedCompany(this.loggedInUserID, this.selectedCompanyID);
            this.props.getActiveLedger(this.selectedCompanyID);
        }
    }

    registerNewLedgerEntry(ledgerEntry){
        let newEntry = {...ledgerEntry};
        newEntry.userID     = this.props.AuthStates.signedInUser.uid; 
        newEntry.userName   = this.props.AuthStates.signedInUser.displayName; 
        this.props.updateLedgerEntry(this.selectedCompanyID, newEntry);
    }

    render(){
        return (
            <div className="companyRegistrationPage"> 
                <custComponents.NavDrawer 
                    isOpen={this.props.UIStates.navigationgationDrawerVisibility}
                    menuLinks={this.props.UIStates.menuLinks}
                    fn_close={this.props.toggelNavigationDrawer.bind(this)} 
                />


                {!(this.props.LedgerStates.selectedCompany && this.props.LedgerStates.selectedCompany.name) ? "" : 
                    <section>
                        <div className="container_companyName">
                            <span> {this.props.LedgerStates.selectedCompany.name} </span>
                        </div>
                        <div className="companyDetails">
                            Phone Number : <span> {this.props.LedgerStates.selectedCompany.phoneNumber} </span> <br/>
                            Email Address : <span> {this.props.LedgerStates.selectedCompany.emailAddress} </span> <br/>
                            Address : <span> {this.props.LedgerStates.selectedCompany.address} </span> <br/>
                        </div>
                        
                        
                        <div className="container_ledgerTable">

                            <table className="table_ledgerTable">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Date</th>
                                        <th>Entry By</th>
                                        <th>Particulars</th>
                                        <th className="cashCol">Cash In</th>
                                        <th className="cashCol">Cash Out</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.props.LedgerStates.ledger.map( (record, index) => {
                                        return (
                                            <tr> 
                                                <td>{index+1}</td>
                                                <td>{record.particulars}</td>
                                                <td>{record.userName}</td>
                                                <td>{record.particulars}</td>
                                                <td>{record.cashIn}</td>
                                                <td>{record.cashOut}</td>
                                                <td> -- </td>
                                            </tr>
                                        )
                                    })}
                                    <custComponents.NewLedgerRecord 
                                        registerNewLedgerEntry={this.registerNewLedgerEntry.bind(this)}
                                        sNo={this.props.LedgerStates.ledger.length +1} 
                                        userName={this.props.AuthStates.signedInUser.displayName} 
                                        />
                                </tbody>
                            </table>
                        </div>
                    </section>
                }
            </div>
        );
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(GeneralLedger);