import React from 'react';

let dotStyle = (status) => {
  let statusColor;

  switch (status) {
    case 'needs screening':
      statusColor = 'red';
      break;

    case 'offer sent':
      statusColor = 'green';
      break;

    case 'hired':
      statusColor = 'blue';
      break;
  
    default:
      statusColor = 'grey';
      break;
  }

  return {
    float: 'left',
    height: 16,
    width: 16,
    backgroundColor: statusColor,
    borderRadius: 1000
  }
};

let labelStyle = {
  float: 'left',
  width: 'calc(100% - 24px)',
  marginLeft: 8,
  textTransform: 'capitalize'
}

let StatusIndicator = (props) => {
  return (
    <div>
      <div style={dotStyle(props.status)}></div>
      <span style={labelStyle}>{props.status}</span>
    </div>
  );
};

export default StatusIndicator;