import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #eceef3;
  /* align-items: center; */
`;
export const ContainerContent = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;
export const ImageHeader = styled.Image`
  background: #eceef3;
  width: 100%;
  position: absolute;
  top: 0;
`;
export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  align-items: center;
  margin-left: 20px;
`;
export const TotalPrice = styled.Text`
  align-items: center;
  margin-right: 20px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;

export const ObservationInput = styled.TextInput`
  background: #fff;
  width: ${Dimensions.get('window').width - 40}px;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  height: 150px;
  elevation: 5;
  font-size: 16px;
  text-align-vertical: top;
`;
export const Error = styled.Text`
  font-size: 12px;
  color: #ff0000;
`;

export const PostalCodeInput = styled.TextInput`
  background: #fff;
  width: ${Dimensions.get('window').width - 40}px;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  height: 45px;
  font-size: 16px;
  elevation: 5;
  align-items: center;
  text-align-vertical: top;
`;
export const StreetNumberContainer = styled.View`
  flex-direction: row;
  width: ${Dimensions.get('window').width - 40}px;
  align-items: center;
`;
export const StreetInput = styled.TextInput`
  background: #fff;
  width: ${(Dimensions.get('window').width - 40) / 1.39}px;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  height: 45px;
  font-size: 16px;
  elevation: 5;
  align-items: center;
  text-align-vertical: top;
`;
export const NumberInput = styled.TextInput`
  background: #fff;
  width: ${(Dimensions.get('window').width - 40) / 4}px;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  margin-left: 10px;
  height: 45px;
  font-size: 16px;
  elevation: 5;
  align-items: center;
  text-align-vertical: top;
`;
export const DistrictInput = styled.TextInput`
  background: #fff;
  width: ${Dimensions.get('window').width - 40}px;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 10px;
  height: 45px;
  font-size: 16px;
  elevation: 5;
  align-items: center;
  text-align-vertical: top;
`;

export const OptionsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: ${Dimensions.get('window').width - 40}px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
`;

export const NextButton = styled.TouchableOpacity`
  background: #e5293e;
  width: 160px;
  height: 35px;
  border-radius: 23px;
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  align-self: flex-end;
`;
export const NextTextButton = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`;
