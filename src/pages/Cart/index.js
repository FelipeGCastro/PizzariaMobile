import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CartActions from '~/store/ducks/cart';

import {
  Container,
  ImageHeader,
  BackButton,
  TotalPrice,
  ContainerContent,
  ContainerCart,
  CartBox,
  ImageCart,
  CartInfo,
  CartName,
  CartDescription,
  PriceText,
  RemoveButton,
  OptionsContainer,
  CartButton,
  NextButton,
  NextTextButton,
} from './styles';

import HeaderImage from '~/assets/Imagens/header-background.png';

class Cart extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Carrinho',
    headerTransparent: 'true',
    headerTitleStyle: { flex: 1, textAlign: 'left' },
    headerLeft: (
      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={25} color="#fff" />
      </BackButton>
    ),
    headerRight: <TotalPrice>R${navigation.getParam('price', 0).toFixed(2)}</TotalPrice>,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    deleteProduct: PropTypes.func.isRequired,
    products: PropTypes.shape({}).isRequired,
  };

  componentDidMount = () => {};

  handleNextPress = () => {
    const { navigation } = this.props;
    const price = navigation.getParam('price', 0);

    navigation.navigate('Address', { price });
  };

  handleMainPress = () => {
    const { navigation } = this.props;

    navigation.navigate('Main');
  };

  handleDeletePress = (productId, price) => {
    const { deleteProduct } = this.props;

    deleteProduct(productId, price);
  };

  render() {
    const { products } = this.props;
    return (
      <Container>
        <ImageHeader source={HeaderImage} resizeMode="stretch" />
        <ContainerContent>
          <ContainerCart
            data={products}
            keyExtractor={product => product.id.toString()}
            numColumns={1}
            renderItem={({ item: product }) => (
              <CartBox>
                <ImageCart source={{ uri: product.url }} resizeMode="contain" />
                <CartInfo>
                  <CartName>{`${product.productName} - ${product.typeName}`}</CartName>
                  <CartDescription>Tamanho: {product.sizeName}</CartDescription>

                  <PriceText>R${product.price}</PriceText>
                </CartInfo>
                <RemoveButton onPress={() => this.handleDeletePress(product.id, product.price)}>
                  <Icon
                    name="delete-forever"
                    style={{ marginRight: 5 }}
                    size={22}
                    color="#e5293e"
                  />
                </RemoveButton>
              </CartBox>
            )}
          />
          <OptionsContainer>
            <CartButton onPress={this.handleMainPress}>
              <Icon name="add-shopping-cart" size={18} color="#666666" />
            </CartButton>
            <NextButton onPress={this.handleNextPress}>
              <NextTextButton>REALIZAR PEDIDO</NextTextButton>
              <Icon name="keyboard-arrow-right" style={{ marginRight: 5 }} size={22} color="#fff" />
            </NextButton>
          </OptionsContainer>
        </ContainerContent>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.cart.products,
  price: state.cart.price,
});
const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
