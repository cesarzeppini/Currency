import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground resizeMode="contain" source={require('./images/background.png')} style={styles.containerImage}>
      <Image resizeMode="contain" source={require('./images/logo.png')} style={styles.image} />
    </ImageBackground>
    <Text style={styles.title}>Currency Converter</Text>
  </View>
);

export default Logo;
