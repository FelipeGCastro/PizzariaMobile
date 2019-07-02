import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Gradient = styled(LinearGradient).attrs({
  colors: ['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.95)'],
  locations: [0.5, 1],
})`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const LogoImage = styled.Image`
  width: 72px;
  height: 72px;
  margin-bottom: 30px;
`;
export const NameInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 8px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  width: 85%;
`;
export const EmailInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 8px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  width: 85%;
`;
export const PasswordInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 8px;
  padding: 0 20px;
  font-size: 16px;
  color: #333;
  height: 52px;
  width: 85%;
  margin-bottom: 15px;
`;
export const SignUpButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background: #e5293e;
  border-radius: 8px;
  padding: 0 20px;
  height: 52px;
  align-items: center;
  justify-content: center;
  width: 85%;
  margin-bottom: 25px;
`;
export const SignUpTextButton = styled.Text`
  font-size: 16px;
  color: #fff;
  align-self: center;
`;
export const SignInText = styled.Text`
  font-size: 16px;
  color: #fff;
  align-self: center;
`;
