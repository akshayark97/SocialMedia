import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Title = props => {
  return <Text style={styles.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string,
};
export default Title;
