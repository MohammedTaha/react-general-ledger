import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';


class NavDrawer extends Component {

    render() {
        return (
            <div className="drawerContainer">
                <Drawer width={300} open={this.props.isOpen}>
                    <AppBar
                        title="Menu"
                        className="AppBar AppBar-drawer"
                        iconStyleLeft={{
                        display: "none"
                    }}
                        onRightIconButtonTouchTap={this.props.fn_close}
                        iconElementRight={<IconButton iconClassName="fa fa-times" />}/>

                    <Menu>

                        {this.props.menuLinks.map((menu, idx)=>{
                            return (
                                <MenuItem key={idx}>
                                    <Link onTouchTap={this.props.fn_close} to={menu.link}>{menu.desc}</Link>
                                </MenuItem>
                            )
                        })}
                    </Menu>
                </Drawer>
            </div>

        );
    }
}

export default NavDrawer;