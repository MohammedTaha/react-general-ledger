import React, {Component} from 'react';
import {Card, CardText} from 'material-ui/Card';
import {connect} from 'react-redux';

function mapStatetoProps(state){
    console.log(" state ", state);
    return {
        UIStates :  state.UIStates
    };
}

class Home extends Component {

    render() {
        return (
            <div className='homePage'>
                <div className='hero-01'> 
                    <section className='containerAppIntro'>
                        {!this.props.UIStates.showLoginForm?
                        <Card className='articleAppIntro'>
                            <CardText>
                                <h1 className='animated bounceInLeft appName'>
                                    App Name
                                </h1>
                                <p className='animated bounceInRight paraAppIntro'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                </p>
                            </CardText>
                        </Card>
                        :""}
                    </section>
                </div>
                <div className='container_keyFeatures'>

                    <section className="sec_keyFeature"></section>
                    <section className="sec_keyFeature"></section>
                    <section className="sec_keyFeature"></section>
                    <section className="sec_keyFeature"></section>
                    <section className="sec_keyFeature"></section>
                    <section className="sec_keyFeature"></section>

                </div>
                <div className='container_credits'>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

                {/*<Card className='login-form'>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                        </CardText>
                        <CardActions>
                            <FlatButton label="Action1" />
                            <FlatButton label="Action2" />
                        </CardActions>
                    </Card>*/}
            </div>
        );
    }
}

export default connect(mapStatetoProps)(Home);