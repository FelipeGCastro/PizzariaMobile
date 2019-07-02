import React, { Component } from 'react';

import Fundo from '~/assets/Imagens/fundo.jpg';
import Logo from '~/assets/Imagens/logo.png';

import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/store/ducks/auth';

import {
  Container,
  Gradient,
  LogoImage,
  NameInput,
  EmailInput,
  PasswordInput,
  SignUpButton,
  SignUpTextButton,
  SignInText,
} from './styles';

class SignUp extends Component {
  static navigationOptions = () => ({
    header: null,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    email: '',
    password: '',
  };

  handleNameChange = (username) => {
    this.setState({ username });
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleSignUpPress = () => {
    const { username, email, password } = this.state;
    const { signUpRequest } = this.props;
    signUpRequest(username, email, password);
  };

  handleLoginPress = () => {
    const { navigation } = this.props;

    navigation.navigate('SignIn');
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <Container source={Fundo} resizeMode="cover">
        <StatusBar hidden />
        <Gradient>
          <LogoImage source={Logo} resizeMode="cover" />
          <NameInput
            value={username}
            onChangeText={this.handleNameChange}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nome completo"
            returnKeyType="next"
            // autoFocus
            onSubmitEditing={() => this.email.focus()}
          />
          <EmailInput
            ref={(input) => {
              this.email = input;
            }}
            keyboardType="email-address"
            value={email}
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
            value={password}
            onChangeText={this.handlePasswordChange}
            autoCapitalize="none"
            placeholder="Senha Secreta"
            returnKeyType="send"
            secureTextEntry
            onSubmitEditing={() => {}}
          />
          <SignUpButton onPress={this.handleSignUpPress}>
            <SignUpTextButton>Criar Conta</SignUpTextButton>
          </SignUpButton>
          <SignInText onPress={() => this.handleLoginPress()}>Já tenho login</SignInText>
        </Gradient>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(SignUp);
