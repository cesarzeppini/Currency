import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {PropTypes} from 'prop-types';

import styles from './styles';

const GhostButton = ({text, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

GhostButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
}

export default GhostButton;
