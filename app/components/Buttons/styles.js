import EStyleSheet from 'react-native-extended-stylesheet';

const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    width: '90%',
    marginTop: 16,
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderWidth: EStyleSheet.hairlineWidth,
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    borderColor: '$border',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '$textContent',
  },
});
