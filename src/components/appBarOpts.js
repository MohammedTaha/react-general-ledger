import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

class AppBarOpts extends Component {


    menuItems = ["Sign in", "Sign up", "Services", "Contact Us"];

    render() {
        return (
            <IconMenu
                iconButtonElement={
                <IconButton iconClassName="fa fa-ellipsis-v" />
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >

            {
                this.menuItems.map((item, idx)=>{
                    return <MenuItem key={idx} primaryText={item} onClick={this.props.clickHandler.bind(this, item)}/>
                })
            }                
            </IconMenu>
        );
    }
}

export default AppBarOpts;