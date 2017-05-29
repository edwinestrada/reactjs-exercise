import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {tealA400} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import applicants from './data.json';

import './App.css';

import ApplicantTable from './ApplicantTable/ApplicantTable';
import ApplicantModal from './ApplicantTable/ApplicantModal';
import AppBar from 'material-ui/AppBar';
import _ from 'lodash';

const ESCAPE_KEY = 27;
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: tealA400,
  },
});

class App extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      openDialog: false,
      applicantShown: null,
      applicants: null
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.openNext = this.openNext.bind(this);
    this.openPrev = this.openPrev.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    injectTapEventPlugin();

    this.setState({
      applicants: applicants
    });
  }

  handleKeyDown(event) {
    switch(event.keyCode) {
      case ESCAPE_KEY:
        this.handleClose();
        break;
      case LEFT_KEY:
        this.openPrev();
        break;
      case UP_KEY:
        this.openPrev();
        break;
      case RIGHT_KEY:
        this.openNext();
        break;
      case DOWN_KEY:
        this.openNext();
        break;
      default: 
        console.log(event.keyCode)
        break;
    }
  }

  handleOpen(applicant) {
    this.setState({
      openDialog: true,
      applicantShown: applicant
    });
  };

  handleClose() {
    this.setState({
      openDialog: false,
      applicantShown: null
    });
  };

  openNext() {
    let currentIndex = _.findIndex(this.state.applicants, this.state.applicantShown);
    let nextIndex;

    if (currentIndex === this.state.applicants.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = ++currentIndex;
    }

    this.setState({
      openDialog: true,
      applicantShown: this.state.applicants[nextIndex]
    });
  }

  openPrev() {
    let currentIndex = _.findIndex(this.state.applicants, this.state.applicantShown);
    let prevIndex;

    if (currentIndex === 0) {
      prevIndex = this.state.applicants.length - 1;
    } else {
      prevIndex = --currentIndex;
    }

    this.setState({
      openDialog: true,
      applicantShown: this.state.applicants[prevIndex]
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App" tabIndex="0" onKeyDown={this.handleKeyDown}>
          <AppBar
            title="Nimble"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{position: 'fixed'}}
          />
          <ApplicantTable applicants={this.state.applicants} handleOpen={this.handleOpen} />
          <ApplicantModal
            openPrev={this.openPrev}
            openNext={this.openNext}
            handleClose={this.handleClose}
            openDialog={this.state.openDialog}
            applicant={this.state.applicantShown} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
