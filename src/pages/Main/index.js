import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  ContainerContent,
  ContainerProducts,
  ImageHeader,
  CartButton,
  HistoryButton,
  MenuBox,
  ImageMenu,
  MenuInfo,
  MenuName,
  MenuDescription,
  TimeInfo,
  TimeText,
} from './styles';

import HeaderImage from '~/assets/Imagens/header-background.png';
import api from '~/services/api';

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Pizzaria Don Juan',
    headerTransparent: 'true',
    headerRight: (
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="add-shopping-cart" size={20} color="#fff" />
      </CartButton>
    ),
    headerLeft: (
      <HistoryButton onPress={() => navigation.navigate('History')}>
        <Icon name="history" size={30} color="#fff" />
      </HistoryButton>
    ),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    products: '',
  };

  componentDidMount = async () => {
    const response = await api.get('products');

    this.setState({ products: response.data });
  };

  handleProductPress = async (productId, productName) => {
    const { navigation } = this.props;

    navigation.navigate('Type', { productId, productName });
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ImageHeader source={HeaderImage} resizeMode="stretch" />
        <ContainerContent>
          <ContainerProducts
            data={products}
            keyExtractor={product => product.id.toString()}
            numColumns={1}
            renderItem={({ item: product }) => (
              <MenuBox onPress={() => this.handleProductPress(product.id, product.name)}>
                <ImageMenu
                  source={{
                    uri: product.url,
                  }}
                  resizeMode="contain"
                  alt={product.name}
                />
                <MenuInfo>
                  <MenuName>{product.name}</MenuName>
                  <MenuDescription>{product.description}</MenuDescription>
                  <TimeInfo>
                    <Icon name="access-alarm" size={18} color="#706e7b" />
                    <TimeText>{product.waiting_time}</TimeText>
                  </TimeInfo>
                </MenuInfo>
              </MenuBox>
            )}
          />
        </ContainerContent>
      </Container>
    );
  }
}
