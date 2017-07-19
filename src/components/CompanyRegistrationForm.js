import React, {Component} from 'react';
import {Card, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class CompanyRegistrationForm extends Component {


    constructor(props){
        super(props);
        this.state = {name : "", address : "", aboutUs : ""};
    }

    handleChange(fieldName, eve, newVal){
        let newState = {};
        newState[fieldName] = newVal;
        this.setState(newState);
    }

    render() {
        return (
            <Card className="animated flipInX registrationFormCard">
                <CardText>
                    <h2 className="cardMainHeading">Register Your New Company</h2>
                    <div className="cardSubHeading">Luckily its free until now..!</div>

                    <TextField
                        value={this.state.name} 
                        onChange={this.handleChange.bind(this, 'name')}
                        name="name"
                        floatingLabelText="Company Name" 
                        fullWidth={true} 
                    />
                    <br />
                    <TextField
                        value={this.state.address}
                        onChange={this.handleChange.bind(this, 'address')}
                        name="address"
                        floatingLabelText="Address" 
                        fullWidth={true} 
                    />
                    <br />
                    <TextField
                        onChange={this.handleChange.bind(this, 'aboutUs')}
                        floatingLabelText="About your company" 
                        fullWidth={true} 
                        multiLine={true} 
                        rows={2} 
                        rowsMax={4} 
                        value={this.state.aboutUs}
                    /><br />
                </CardText>
                <CardActions className="rightAlignedElems">
                    <FlatButton label="Register" onTouchTap={this.props.registerCompany.bind(this, this.state)}  />
                </CardActions>
            </Card>
        );
    }
}

export default CompanyRegistrationForm;