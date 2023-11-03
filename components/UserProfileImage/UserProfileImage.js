import {View, Image} from 'react-native';
import styles from './styles';
import React from 'react';
import PropTypes from 'prop-types';

const UserProfileImage = props => {
  return (
    <View
      style={[styles.useImageContainer, {borderRadius: props.imageDimensions}]}>
      <Image
        style={{width: props.imageDimensions, height: props.imageDimensions}}
        source={props.profileImage}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
