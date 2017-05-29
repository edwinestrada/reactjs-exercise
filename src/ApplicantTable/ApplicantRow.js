import React from 'react';
import Avatar from './Avatar';

let ApplicantRow = (props) => {
  return (
    <tr className="border-bottom">
      <td><Avatar name={props.name} /> {props.name}</td>
      <td>{props.status}</td>
      <td>{props.applicationDate}</td>
      <td>{props.lastAction}</td>
      <td>{props.location}</td>
      <td>{props.highNeeds}</td>
      <td>...</td>
    </tr>
  );
};

export default ApplicantRow;