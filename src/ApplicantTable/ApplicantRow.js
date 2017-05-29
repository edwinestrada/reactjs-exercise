import React from 'react';

import getApplicantDetails from '../common/getApplicantDetails';

import './ApplicantRow.css';

import Paper from 'material-ui/Paper';
import {CardHeader} from 'material-ui/Card';
import StatusIndicator from './StatusIndicator';
import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreHorizIcon color={grey400} />
  </IconButton>
);

let ApplicantRow = (props) => {

  return (
    <Paper zDepth={1} className="table-row" onClick={() => props.handleClick(props.applicant)}>
      <div className="table-cell applicant">
        <CardHeader
          title={props.applicant.name}
          subtitle={props.applicant ? getApplicantDetails.getApplicantEmail(props.applicant) : ''}
          avatar={props.applicant ? getApplicantDetails.getApplicantAvatar(props.applicant) : ''}
        />
      </div>
      <div className="table-cell status with-padding"><StatusIndicator status={props.applicant.status} /></div>
      <div className="table-cell application-date with-padding">{props.applicant.applicationDate}</div>
      <div className="table-cell with-padding">{props.applicant.lastAction ? props.applicant.lastAction : 'No Action'}</div>
      <div className="table-cell location with-padding">{props.applicant.location}</div>
      <div className="table-cell with-padding">{props.applicant.highNeeds ? props.applicant.highNeeds : 'High Needs'}</div>
      <div className="table-cell more-actions">{iconButtonElement}</div>
    </Paper>
  );
};

export default ApplicantRow;