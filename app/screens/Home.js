import React from 'react';
import {View, StatusBar, KeyboardAvoidingView} from 'react-native';

import {Container} from '../components/Container';
import {Logo} from '../components/Logo';
import {InputWithButton} from '../components/TextInput';
import {GhostButton} from '../components/Buttons';
import {LastConverted} from '../components/Texts';
import {Header} from '../components/Headers';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'EUR';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '86.30';
const TEMP_CONVERSION_RATE = 0.8630;
const TEMP_CONVERSION_DATE = new Date();

class Home extends React.Component{
  handlePressBaseCurrency = () => {
    console.log('press base');
  }

  handlePressQuoteCurrency = () => {
    console.log('press quote');
  }

  handleTextChange = (text) => {
    console.log('change text', text);
  }

  handleSwapCurrency = () => {
    console.log('press swap currency');
  }

  handleOptionsPress = () => {
    console.log('handle options press');
  }
  render(){
    return(
      <Container>
        <StatusBar translucent={false} barStyle="dark-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView style={{width: '90%', justifyContent: 'center', alignItems: 'center'}} behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={TEMP_BASE_CURRENCY}
            onPress={this.handlePressBaseCurrency}
            defaultValue={TEMP_BASE_PRICE}
            keyboardType="numeric"
            onChangeText={this.handleTextChange}
          />
          <InputWithButton
            buttonText={TEMP_QUOTE_CURRENCY}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={TEMP_QUOTE_PRICE}
          />
          <LastConverted base={TEMP_BASE_CURRENCY} quote={TEMP_QUOTE_CURRENCY} date={TEMP_CONVERSION_DATE} conversionRate={TEMP_CONVERSION_RATE} />
          <GhostButton text="Reverse" onPress={this.handleSwapCurrency} />
        </KeyboardAvoidingView>
      </Container>
    )
  }
}

export default Home;
