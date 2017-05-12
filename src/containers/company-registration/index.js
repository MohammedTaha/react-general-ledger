import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as custComponents from '../../components';
import {UIActs} from '../../actions';



function mapStatetoProps(state){
    return {
        UIStates : state.UIStates
    };
}

function mapDispatchtoProps(dispatch){
    return {
        toggelNavigationDrawer : ()=>{dispatch(UIActs.toggelNavigationDrawer()); }
    }
}
class CompanyRegistration extends Component{
    componentWillMount(){
        //this.props.history.replace("/");
    }
    
    render(){
        return (
            <div> 
                <custComponents.NavDrawer 
                    isOpen={this.props.UIStates.navigationgationDrawerVisibility}
                    fn_close={this.props.toggelNavigationDrawer.bind(this)} 
                />

                Hello from Company registration page
            </div>
        );
    }
}

export default   connect(mapStatetoProps, mapDispatchtoProps)(CompanyRegistration);