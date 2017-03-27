import React, {Component} from 'react';
import AppRouter from './AppRouter';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar className="AppBar" title="Title" iconElementRight={ <IconButton iconClassName="fa fa-ellipsis-v" />}/>
          <AppRouter/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
