import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import {
  Container,
  ContainerContent,
  ContainerSizes,
  ImageHeader,
  SizeBox,
  SizeImage,
  SizeTitle,
  BackButton,
  SizePrice,
  SizeInfo,
} from './styles';

import api from '~/services/api';

import HeaderImage from '~/assets/Imagens/header-background.png';

class Size extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Selecione um tamanho',
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
    loadProduct: PropTypes.func.isRequired,
  };

  state = {
    sizes: null,
  };

  componentDidMount = async () => {
    const { navigation } = this.props;
    const typeId = await navigation.getParam('type_id', 'NO-ID');
    const response = await api.get(`types/${typeId}/sizes`);

    this.setState({ sizes: response.data });
  };

  handleSizePress = async (SizeName, sizeId, Price) => {
    const { loadProduct, navigation } = this.props;

    await loadProduct(SizeName, sizeId, Price);
    navigation.navigate('Cart');
  };

  render() {
    const { sizes } = this.state;
    return (
      <Container>
        <ImageHeader source={HeaderImage} resizeMode="stretch" />
        <ContainerContent>
          <ContainerSizes
            data={sizes}
            keyExtractor={size => size.id.toString()}
            numColumns={2}
            renderItem={({ item: size }) => (
              <SizeBox onPress={() => this.handleSizePress(size.name, size.id, size.price)}>
                <SizeImage source={{ uri: size.url }} resizeMode="contain" />
                <SizeInfo>
                  <SizeTitle>{size.name}</SizeTitle>
                  <SizePrice>R${size.price}</SizePrice>
                </SizeInfo>
              </SizeBox>
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
)(Size);
