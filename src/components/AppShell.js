import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { AppBar, Drawer, MenuItem } from 'material-ui';

class AppShell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
        this.handleRequestChange = this.handleRequestChange.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    handleDrawerToggle() {
        this.setState({open: !this.state.open});
    }
    
    handleRequestChange(open) {
        this.setState({open});
    }

    handleLinkClick() {
        this.setState({open: false});
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar onLeftIconButtonClick={this.handleDrawerToggle} />
                    <Drawer open={this.state.open} docked={false} 
                        onRequestChange={this.handleRequestChange}>
                        <MenuItem 
                            primaryText={'Home'} 
                            containerElement={<Link to="/" />}
                            onClick={this.handleLinkClick}/>
                        <MenuItem 
                            primaryText={'Users'} 
                            containerElement={<Link to="/users" />}
                            onClick={this.handleLinkClick}/>
                        <MenuItem 
                            primaryText={'Notification'} 
                            containerElement={<Link to="/notification" />}
                            onClick={this.handleLinkClick}/>
                    </Drawer>
                    <div id="content" style={{width:'90%', margin: 'auto', marginTop: '30px'}}>
                        {React.cloneElement(this.props.children)}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default AppShell;
