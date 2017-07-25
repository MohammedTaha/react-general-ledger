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
    totals;
    constructor(props){
        super(props);
        if(props && props.match && props.match.params && props.match.params.companyID){
            this.selectedCompanyID = props.match.params.companyID
        }
        this.totals = {cashIn : 0, cashOut: 0};
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
        newEntry.cashIn     = newEntry.cashIn ? parseInt(newEntry.cashIn) : 0;
        newEntry.cashOut    = newEntry.cashOut ? parseInt(newEntry.cashOut) : 0;
        // if(isNaN(newEntry.cashIn) || isNaN(newEntry.cashOut)){
        //     return;
        // }
        newEntry.userID     = this.props.AuthStates.signedInUser.uid; 
        newEntry.userName   = this.props.AuthStates.signedInUser.displayName; 
        this.props.updateLedgerEntry(this.selectedCompanyID, newEntry);
    }

    getViewableDate(suggestedDate) {
        if(!suggestedDate){
            return "";
        }
        var dateToParse     = new Date(suggestedDate);
        var month           = Number(dateToParse.getMonth() + 1);
        var date            = Number(dateToParse.getDate());
        var dateStr 	    = ((date < 10 ? ("0" + date) : date) + "/" + (month < 10 ? ("0" + month) : month) + "/" + dateToParse.getFullYear());
        var hours           = Number(dateToParse.getHours());
        var AM_PM           = (hours >= 12 ? "PM" : "AM");
        hours               = (hours > 12) ? (hours - 12) : hours;
        var mins            = Number(dateToParse.getMinutes());
        var timeStr			= ((hours < 10 ? ("0" + hours) : hours) + ":" + (mins < 10 ? ("0" + mins) : mins) + " " + AM_PM);
        return (dateStr + " ( " + timeStr + " )");
    }

    render(){
        this.totals = {cashIn : 0, cashOut : 0};
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
                            <table>
                                <tbody>
                                    <tr><td>Phone Number : </td><td className='readonlyCompanyDetail'>{this.props.LedgerStates.selectedCompany.phoneNumber}</td></tr>
                                    <tr><td>Email Address : </td><td className='readonlyCompanyDetail'>{this.props.LedgerStates.selectedCompany.emailAddress}</td></tr>
                                    <tr><td>Address : </td><td className='readonlyCompanyDetail'>{this.props.LedgerStates.selectedCompany.address}</td></tr>
                                </tbody>
                            </table>
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
                                        
                                        if(!index){
                                            this.totals = {cashIn : 0, cashOut : 0};
                                        }
                                        if (record.cashIn) {
                                            this.totals.cashIn += record.cashIn; 
                                        }
                                        if (record.cashOut) {
                                            this.totals.cashOut += record.cashOut; 
                                        }
                                        
                                        return (
                                            <tr key={"record_" + index}> 
                                                <td>{index+1}</td>
                                                <td>{this.getViewableDate(record.dt)}</td>
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
                                    <tr>
                                        <td colSpan="4" className="cell_total"> TOTAL </td>    
                                        <td> {this.totals.cashIn || "0"} </td>    
                                        <td> {this.totals.cashOut || "0"} </td>    
                                        <td> - </td>    
                                    </tr>    
                                    <tr>
                                        <td colSpan="4" className="cell_total"> IN HAND </td>    
                                        <td colSpan="2"> {(this.totals.cashIn - this.totals.cashOut) || "0"} </td>    
                                        <td> - </td>    
                                    </tr>    
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