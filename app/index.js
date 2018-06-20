import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#0055ff',
  $white: '#fff',
  $textContent: '#2D3942',
  $grey: '#f3f3f3',
  $border: '#d2d2d2',
});

export default () => <Home />;
