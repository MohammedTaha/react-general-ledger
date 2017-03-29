import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

class AppBarOpts extends Component {


    render() {
        return (
            <IconMenu
                iconButtonElement={
                <IconButton iconClassName="fa fa-ellipsis-v" />
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Sign in" onClick={this.props.clickHandler.bind(this, 'Sign in')}/>
                <MenuItem primaryText="Services"  onClick={this.props.clickHandler.bind(this, 'Services')}/>
                <MenuItem primaryText="Contact Us"  onClick={this.props.clickHandler.bind(this, 'Contact Us')}/>
            </IconMenu>
        );
    }
}

export default AppBarOpts;