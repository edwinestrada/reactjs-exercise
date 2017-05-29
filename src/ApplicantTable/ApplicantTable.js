import React from 'react';

import './ApplicantTable.css';

import ApplicantRow from './ApplicantRow';

export default class ApplicantTable extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      sortBy: this.NAME_KEY,
      sortByReverse: false
    };
  }

  renderRows = (applicants) => {
    return applicants.map((applicant, index) => <ApplicantRow key={index} handleClick={this.props.handleOpen} applicant={applicant} />);
  };

  render() {
    return (
      <div className="table-container">
        <div className="table-header">
          <div className="table-cell with-padding applicant">Applicant</div>
          <div className="table-cell status with-padding">Status</div>
          <div className="table-cell application-date with-padding">Application Date</div>
          <div className="table-cell with-padding">Last Action</div>
          <div className="table-cell location with-padding">Location</div>
          <div className="table-cell with-padding">High Needs</div>
        </div>
        <div className="table-body">{this.renderRows(this.props.applicants)}</div>
      </div>
    );
  }
};