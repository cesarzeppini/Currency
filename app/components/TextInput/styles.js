import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$white',
  $buttonBackgroundColorModifier: 0.1,

  container: {
    backgroundColor: '$white',
    width: '90%',
    height: INPUT_HEIGHT,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
    borderWidth: EStyleSheet.hairlineWidth,
    borderColor: '$border'
  },
  containerDisabled: {
    backgroundColor: '$grey',
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderWidth: EStyleSheet.hairlineWidth,
    borderColor: '$border'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 16,
    color: '$textContent',
  },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 16,
    color: '$textContent',
  },
  border: {
    height: INPUT_HEIGHT,
    width: EStyleSheet.hairlineWidth,
    borderColor: '$border'
  },
});
