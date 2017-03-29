import React, {Component} from 'react';
import AppRouter from './AppRouter';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import * as custComponents from './components';

class App extends Component {


  clickHandler(optName){
    console.log("Inside click handler ", optName);
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar 
            className="AppBar animated fadeIn" 
            title="The name of this app" 
            iconStyleLeft={{display:'none'}} 
            iconElementRight={ 
                <custComponents.AppBarOpts clickHandler={this.clickHandler.bind(this)}/>
              }
            />
          <AppRouter/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
