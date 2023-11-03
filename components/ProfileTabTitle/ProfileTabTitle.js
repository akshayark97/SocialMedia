import {Text} from 'react-native';
import React from 'react';
import style from './style';
import PropTypes from 'prop-types';

const ProfileTabTitle = props => {
  return (
    <Text style={[style.title, !props.isFocused && style.titleNotFocused]}>
      {props.title}
    </Text>
  );
};

ProfileTabTitle.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
export default ProfileTabTitle;
