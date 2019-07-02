import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/store/ducks/auth';

import { distanceInWordsToNow } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';
import {
  Container,
  ImageHeader,
  BackButton,
  ContainerContent,
  ContainerOrders,
  HistoryBox,
  HistoryInfo,
  HistoryName,
  HistoryTime,
  PriceText,
  LogoutButton,
  LogoutTextButton,
} from './styles';

import HeaderImage from '~/assets/Imagens/header-background.png';

class History extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Carrinho',
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
    signOut: PropTypes.func.isRequired,
  };

  state = {
    orders: '',
  };

  componentDidMount = async () => {
    const { data } = await api.get('myorders');
    this.setState({ orders: data });
  };

  handlePizzaPress = () => {
    const { navigation } = this.props;

    navigation.navigate('');
  };

  handleLogoutPress = () => {
    const { signOut, navigation } = this.props;

    signOut();
    navigation.navigate('SignIn');
  };

  render() {
    const { orders } = this.state;
    console.tron.log(orders);
    return (
      <Container>
        <ImageHeader source={HeaderImage} resizeMode="stretch" />
        <ContainerContent>
          <ContainerOrders
            data={orders}
            keyExtractor={order => order.id.toString()}
            numColumns={1}
            renderItem={({ item: order }) => (
              <HistoryBox onPress={this.handlePizzaPress}>
                <HistoryInfo>
                  <HistoryName>Pedido #{orders.indexOf(order) + 1}</HistoryName>
                  <HistoryTime>
                    {`Há ${distanceInWordsToNow(order.created_at, { locale: pt })}`}
                  </HistoryTime>

                  <PriceText>R${order.price}</PriceText>
                </HistoryInfo>
              </HistoryBox>
            )}
          />
          <LogoutButton onPress={this.handleLogoutPress}>
            <LogoutTextButton>Sair</LogoutTextButton>
          </LogoutButton>
        </ContainerContent>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(History);
