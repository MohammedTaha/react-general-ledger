import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

class AppBarOpts extends Component {


    //menuItems = this.props.opts;

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
                this.props.opts.map((item, idx)=>{
                    return <MenuItem key={idx} primaryText={item} onClick={this.props.clickHandler.bind(this, item)}/>
                })
            }          
          
            </IconMenu>
        );
    }
}

export default AppBarOpts;