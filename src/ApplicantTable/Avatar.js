import React from 'react';
import MDAvatar from 'material-ui/Avatar';

let Avatar = (props) => {
  const firstLetter = props.name.slice(0,1).toLowerCase();

  return (
    <MDAvatar src={`https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/avatars/avatar_tile_${firstLetter}_120.png`} alt={props.name} />
  );
};

export default Avatar;