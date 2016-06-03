import React, { Component, PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import Title from 'react-title-component';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { redA100 } from 'material-ui/styles/colors';
import Footer from './Footer';

// const muiTheme = getMuiTheme({
//   palette: {
//     accent1Color: redA100,
//   },
// });

const lightTheme = getMuiTheme();
const darkTheme = getMuiTheme(darkBaseTheme);

class Master extends Component {

  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
      theme: lightTheme,
    };
  }

  handleDrawerToggle = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  handleDrawerClose = () => this.setState({ drawerOpen: false });

  handleNightToggle = () => {
    if (this.state.theme === lightTheme) {
      this.setState({ theme: darkTheme });
    } else {
      this.setState({ theme: lightTheme });
    }
  };


  render() {
    return (
      <MuiThemeProvider muiTheme={this.state.theme}>
        <div>
          <Title render="Adventure Lookup" />
          <AppBar
            title={"Adventure Lookup"}
            zDepth={1}
            onLeftIconButtonTouchTap={this.handleDrawerToggle}
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem primaryText="Account" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
              </IconMenu>
            }
          />
          <Drawer
            open={this.state.drawerOpen}
            docked={false}
            onRequestChange={(open) => this.setState({ drawerOpen: open })}
          >

            <Link to="/home"><MenuItem onTouchTap={this.handleDrawerClose}>Home</MenuItem></Link>
            <Link to="/about"><MenuItem onTouchTap={this.handleDrawerClose}>About</MenuItem></Link>
            <Link to="/search"><MenuItem onTouchTap={this.handleDrawerClose}>Find</MenuItem></Link>
            <Link to="/browse"><MenuItem onTouchTap={this.handleDrawerClose}>Browse</MenuItem></Link>
            <Link to="/add"><MenuItem onTouchTap={this.handleDrawerClose}>Add</MenuItem></Link>
            <Link to="/account"><MenuItem onTouchTap={this.handleDrawerClose}>Account</MenuItem></Link>
            <MenuItem>
              <Toggle label="Toggle Night Mode" onToggle={this.handleNightToggle} />
            </MenuItem>
          </Drawer>
          <div style={{ minHeight: '80vh' }}>
            {this.props.children}
          </div>
          <Footer style={{ textAlign: 'center' }} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Master;
