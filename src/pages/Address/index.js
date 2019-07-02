import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import cep from 'cep-promise';

import {
  Container,
  ImageHeader,
  BackButton,
  TotalPrice,
  ContainerContent,
  ObservationInput,
  Error,
  PostalCodeInput,
  OptionsContainer,
  NextButton,
  NextTextButton,
  StreetNumberContainer,
  StreetInput,
  NumberInput,
  DistrictInput,
} from './styles';

import HeaderImage from '~/assets/Imagens/header-background.png';

class Address extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Realizar Pedido',
    headerTransparent: 'true',
    headerTitleStyle: { flex: 1, textAlign: 'left' },
    headerLeft: (
      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={25} color="#fff" />
      </BackButton>
    ),
    headerRight: <TotalPrice>R${navigation.getParam('price', 0).toFixed(2)}</TotalPrice>,
  });

  state = {
    observation: '',
    postalCode: '',
    street: '',
    number: '',
    district: '',
    error: null,
  };

  componentDidMount = () => {};

  handleObsChange = (observation) => {
    this.setState({ observation });
  };

  handlePostalCodeChange = async (postalCode) => {
    this.setState({ postalCode, error: null });
  };

  addressFromPostal = async () => {
    const { postalCode } = this.state;
    try {
      const response = await cep(postalCode);
      console.tron.log(response, 'address from postal');
      this.setState({ street: response.street, district: response.neighborhood });
    } catch (error) {
      console.tron.log(error, 'Error');
      this.setState({ error: 'Não foram encontrados nenhum endereço com esse CEP' });
    }
  };

  handleStreetChange = (street) => {
    this.setState({ street });
  };

  handleNumberChange = (number) => {
    this.setState({ number });
  };

  handleDistrictChange = (district) => {
    this.setState({ district });
  };

  handleProcessOrder = () => {
    const {
      observation, postalCode, street, number, district,
    } = this.state;
    const { requestOrder } = this.props;
    requestOrder(observation, postalCode, street, number, district);
  };


  render() {
    const {
      observation, postalCode, street, number, district, error,
    } = this.state;
    return (
      <Container>
        <ImageHeader source={HeaderImage} resizeMode="stretch" />
        <ContainerContent>
          <ObservationInput
            placeholder="Alguma observação?"
            value={observation}
            onChangeText={this.handleObsChange}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={() => this.postalCode.focus()}
          />
          {error ? <Error>{error}</Error> : null}
          <PostalCodeInput
            ref={(input) => {
              this.postalCode = input;
            }}
            keyboardType="number-pad"
            value={postalCode}
            onChangeText={this.handlePostalCodeChange}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Qual seu CEP?"
            returnKeyType="next"
            onEndEditing={this.addressFromPostal}
            onSubmitEditing={this.addressFromPostal}
          />
          <StreetNumberContainer>
            <StreetInput
              ref={(input) => {
                this.street = input;
              }}
              value={street}
              onChangeText={this.handleStreetChange}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Rua"
              returnKeyType="next"
              onSubmitEditing={() => this.number.focus()}
            />
            <NumberInput
              ref={(input) => {
                this.number = input;
              }}
              keyboardType="number-pad"
              value={number}
              onChangeText={this.handleNumberChange}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nº"
              returnKeyType="next"
              onSubmitEditing={() => this.district.focus()}
            />
          </StreetNumberContainer>
          <DistrictInput
            ref={(input) => {
              this.district = input;
            }}
            value={district}
            onChangeText={this.handleDistrictChange}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Bairro"
            returnKeyType="next"
            // onSubmitEditing={this.}
          />
          <OptionsContainer>
            <NextButton onPress={this.handleProcessOrder}>
              <NextTextButton>FINALIZAR</NextTextButton>
              <Icon name="keyboard-arrow-right" style={{ marginRight: 5 }} size={22} color="#fff" />
            </NextButton>
          </OptionsContainer>
        </ContainerContent>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(Address);
