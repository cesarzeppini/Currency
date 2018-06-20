import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  image: {
    width: imageWidth / 2,
  },
  title: {
    marginTop: 24,
    marginBottom: 24,
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -0.5,
    backgroundColor: '$textContent',
    color: '$white',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
