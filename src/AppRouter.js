import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home, PageNotFound, CompanyRegistration, GeneralLedger} from './containers';

class AppRouter extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact={true} path="/" component={Home}></Route>
                    <Route exact={true} path="/Company" component={CompanyRegistration}></Route>
                    <Route exact={true} path="/Company/:companyID" component={GeneralLedger}></Route>
                    <Route path="/404" component={PageNotFound}></Route>
                </div>
            </Router>
        )
    }
}

export default AppRouter;