import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Fundo from '~/assets/Imagens/fundo.jpg';
import Logo from '~/assets/Imagens/logo.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/store/ducks/auth';

import { StatusBar } from 'react-native';

import {
  Container,
  Gradient,
  LogoImage,
  EmailInput,
  PasswordInput,
  SignInButton,
  SignInTextButton,
  SignUpText,
} from './styles';

class SignIn extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loginRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleSignInPress = () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;
    loginRequest(email, password);
  };

  handleSignUpPress = () => {
    const { navigation } = this.props;

    navigation.navigate('SignUp');
  };

  render() {
    return (
      <Container source={Fundo} resizeMode="cover">
        <StatusBar hidden />
        <Gradient>
          <LogoImage source={Logo} resizeMode="cover" />
          <EmailInput
            keyboardType="email-address"
            // value={email}
            onChangeText={this.handleEmailChange}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Seu email"
            returnKeyType="next"
            // autoFocus
            onSubmitEditing={() => this.password.focus()}
          />
          <PasswordInput
            ref={(input) => {
              this.password = input;
            }}
            // value={password}
            onChangeText={this.handlePasswordChange}
            autoCapitalize="none"
            placeholder="Senha Secreta"
            returnKeyType="send"
            secureTextEntry
            onSubmitEditing={() => this.handleSignInPress()}
          />
          <SignInButton onPress={this.handleSignInPress}>
            <SignInTextButton>Entrar</SignInTextButton>
          </SignInButton>
          <SignUpText onPress={this.handleSignUpPress}>Criar conta gratuita</SignUpText>
        </Gradient>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
