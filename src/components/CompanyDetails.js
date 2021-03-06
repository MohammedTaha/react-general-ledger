import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card, CardText} from 'material-ui/Card';

class CompanyDetails extends Component {


    render() {
        return (
            
            <Link to={"/Company/"+ this.props.details.uid}>
                <Card className="animated fadeInUp companyDetailsCard">
                    <CardText>
                        <div className="hintText rightAlignedElems">Registered On : REGISTRATION_DATE</div>
                        <h2 className="cardMainHeading">{this.props.details.name}</h2>
                        <div className="cardSubHeading">{this.props.details.address}</div>
                        <br />

                        <div className="aboutUsContainer">{this.props.details.aboutUs}</div>
                    </CardText>
                </Card>
            </Link>
        );
    }
}

export default CompanyDetails;