import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';

import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';
const UserPost = props => {
  return (
    <View style={styles.userPostContainer}>
      <View style={styles.user}>
        <View style={styles.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={horizontalScale(48)}
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.username}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={styles.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisH}
          size={scaleFontSize(24)}
          color={'#79869F'}
        />
      </View>
      <View style={styles.postImage}>
        <Image source={props.image} />
      </View>
      <View style={styles.userPostStats}>
        <View style={styles.userPostStatButton}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={styles.userPostStatText}>{props.likes}</Text>
        </View>
        <View style={styles.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={styles.userPostStatText}>{props.comments}</Text>
        </View>
        <View style={styles.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={styles.userPostStatText}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};
export default UserPost;
