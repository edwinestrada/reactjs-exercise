import React, { Component } from 'react';

import getApplicantDetails from '../common/getApplicantDetails';

import Dialog from 'material-ui/Dialog';
import {CardTitle, CardText} from 'material-ui/Card';
import StatusIndicator from './StatusIndicator';
import {List, ListItem} from 'material-ui/List';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import CalendarIcon from 'material-ui/svg-icons/action/today';
import PlaceIcon from 'material-ui/svg-icons/communication/location-on';
import ActionIcon from 'material-ui/svg-icons/maps/directions-walk';
import FlatButton from 'material-ui/FlatButton';

class ApplicantModal extends Component {
  renderButtons() {
    const buttons = [
      <FlatButton
        label="Back"
        onTouchTap={this.props.openPrev}
      />,
      <FlatButton
        label="Next"
        onTouchTap={this.props.openNext}
      />,
    ];
    return buttons;
  }

  render() {
    return (
      <Dialog
        actions={this.renderButtons()}
        modal={false}
        open={this.props.openDialog}
        onRequestClose={this.props.handleClose}
      >
        <CardTitle
          title={this.props.applicant ? this.props.applicant.name : ''}
          style={{textTransform: 'capitalize'}}
        >
          <StatusIndicator status={this.props.applicant ? this.props.applicant.status : ''}/>
        </CardTitle>
        <CardText>
          <List style={{width: '50%', float: 'left'}}>
            <ListItem
              insetChildren={true}
              leftIcon={<CalendarIcon />}
              primaryText={this.props.applicant ? this.props.applicant.applicationDate : null}
              secondaryText="Application Date"
            />
            <ListItem
              insetChildren={true}
              leftIcon={<EmailIcon />}
              primaryText={this.props.applicant ? getApplicantDetails.getApplicantEmail(this.props.applicant) : null}
              secondaryText="Email"
            />
          </List>
          <List style={{width: '50%', float: 'left'}}>
            <ListItem
              insetChildren={true}
              leftIcon={<ActionIcon />}
              primaryText={this.props.applicant && this.props.applicant.lastAction ? this.props.applicant.lastAction : 'No Action'}
              secondaryText="Last Action"
            />
            <ListItem
              style={{textTransform: 'capitalize'}}
              insetChildren={true}
              leftIcon={<PlaceIcon />}
              primaryText={this.props.applicant ? this.props.applicant.location : null}
              secondaryText="Location"
            />
          </List>
        </CardText>
      </Dialog>
    );
  }
};

export default ApplicantModal;