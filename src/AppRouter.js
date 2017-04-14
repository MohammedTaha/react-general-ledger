import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home, PageNotFound, CompanyRegistration} from './containers';

class AppRouter extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact={true} path="/" component={Home}></Route>
                    <Route exact={true} path="/CompanyRegistration" component={CompanyRegistration}></Route>
                    <Route path="/404" component={PageNotFound}></Route>
                </div>
            </Router>
        )
    }
}

export default AppRouter;