import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import {
  Container,
  ContainerContent,
  ContainerTypes,
  ImageHeader,
  TypeBox,
  TypeImage,
  TypeTitle,
  BackButton,
} from './styles';

import HeaderImage from '~/assets/Imagens/header-background.png';
import api from '~/services/api';

class Type extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Selecione um tipo',
    headerTransparent: 'true',
    headerTitleStyle: { flex: 1, textAlign: 'left' },
    headerLeft: (
      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={25} color="#fff" />
      </BackButton>
    ),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loadType: PropTypes.func.isRequired,
  };

  state = {
    types: '',
    productName: '',
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const productId = await navigation.getParam('productId', 'NO-ID');
    const productName = await navigation.getParam('productName', 'NO-ID');
    const response = await api.get(`products/${productId}/types`);

    this.setState({ types: response.data, productName });
  };

  handleTypePress = async (typeName, typeId, url) => {
    const { productName } = this.state;
    const { loadType } = this.props;

    loadType(productName, typeName, typeId, url);
  };

  render() {
    const { types } = this.state;
    return (
      <Container>
        <ImageHeader source={HeaderImage} resizeMode="stretch" />
        <ContainerContent>
          <ContainerTypes
            data={types}
            keyExtractor={type => type.id.toString()}
            numColumns={2}
            renderItem={({ item: type }) => (
              <TypeBox onPress={() => this.handleTypePress(type.name, type.id, type.url)}>
                <TypeImage source={{ uri: type.url }} resizeMode="stretch" />
                <TypeTitle>{type.name}</TypeTitle>
              </TypeBox>
            )}
          />
        </ContainerContent>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Type);
