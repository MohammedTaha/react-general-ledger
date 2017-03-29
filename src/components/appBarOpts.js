import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

class AppBarOpts extends Component {


    optSelected(optName){
        console.log("optName");
        console.log(optName);
        this.props.clickHandler(optName)
    }

    render() {
        return (
            <IconMenu
                iconButtonElement={
                <IconButton iconClassName="fa fa-ellipsis-v" />
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="Sign in" onClick={this.optSelected.bind(this, 'Sign in')}/>
                <MenuItem primaryText="Services"  onClick={this.optSelected.bind(this, 'Services')}/>
                <MenuItem primaryText="Contact Us"  onClick={this.optSelected.bind(this, 'Contact Us')}/>
            </IconMenu>
        );
    }
}

export default AppBarOpts;