import React from 'react';
import _ from 'lodash';

import ApplicantRow from './ApplicantRow';

export default class ApplicantTable extends React.Component {
  NAME_KEY = 'name';
  DATE_KEY = 'applicationDate';

  constructor(props, context){
    super(props, context);
    this.state = {
      sortBy: this.NAME_KEY,
      sortByReverse: false
    };
  }

  handleSortByName = () => {
    this.setState(prevState => ({ sortBy: this.NAME_KEY }));
    this.setState(prevState => ({ sortByReverse: !prevState.sortByReverse }));
  };

  handleSortByDate = () => {
    this.setState(prevState => ({ sortBy: this.DATE_KEY }));
    this.setState(prevState => ({ sortByReverse: !prevState.sortByReverse }));
  };

  renderRows = (applicants, sortBy, sortByReverse) => {
    if(!_.isEmpty(applicants)){
      let sortedApplicants = _.sortBy(applicants, function(applicant) { return applicant[sortBy]; });
      if (sortByReverse) sortedApplicants.reverse();
      return sortedApplicants.map((applicant, index) => <ApplicantRow key={index} {...applicant} />);
    }
  };

  getSortIcon = (sortBy, sortByType) => {
    const sortDirection = this.state.sortByReverse ? 'desc' : 'asc';
    const iconClass = `fa fa-sort-${sortDirection}`;
    return sortBy === this.state.sortBy ? <i className={iconClass} aria-hidden="true"></i> : <i className="fa fa-sort" aria-hidden="true"></i>;
  };

  render() {
    return (
      <table className="">
        <thead className="">
          <tr className="">
            <th className="" onClick={this.handleSortByName}>
              Name {this.getSortIcon(this.NAME_KEY, 'alpha')}
            </th>
            <th className="">Status</th>
            <th className="" onClick={this.handleSortByDate}>
              Application Date {this.getSortIcon(this.DATE_KEY, 'numeric')}
            </th>
            <th className="">Last Action</th>
            <th className="">Location</th>
            <th className="">High Needs</th>
            <th className="">...</th>
          </tr>
        </thead>
        <tbody>{this.renderRows(this.props.applicants, this.state.sortBy, this.state.sortByReverse)}</tbody>
      </table>
    );
  }
};