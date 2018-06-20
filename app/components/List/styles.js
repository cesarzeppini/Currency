import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$white',
  },
  text: {
    fontSize: 16,
    color: '$textContent',
  },
  separator: {
    marginLeft: 24,
    backgroundColor: '$border',
    flex: 1,
    height: EStyleSheet.hairlineWidth,
  },
  icon: {
    width: 24,
    height: 24,
    opacity: 0,
  },
  iconVisible: {
    opacity: 1,
  },
});
