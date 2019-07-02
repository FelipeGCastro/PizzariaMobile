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
export const ContainerCart = styled.FlatList.attrs({
  contentContainerStyle: {
    // paddingTop: getStatusBarHeight(),
    paddingBottom: 15,
  },
})`
  flex: 1;
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

export const CartBox = styled.View`
  background: #fff;
  flex-direction: row;
  width: ${Dimensions.get('window').width - 40}px;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  align-items: center;
`;
export const ImageCart = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 4px;
  margin-right: 10px;
`;
export const CartInfo = styled.View`
  flex: 1;
`;
export const CartName = styled.Text`
  font-size: 14px;
  color: #0b2031;
  text-align: left;
  margin-bottom: 5px;
`;
export const CartDescription = styled.Text`
  font-size: 13px;
  color: #706e7b;
  margin-bottom: 5px;
`;
export const PriceText = styled.Text`
  font-size: 16px;
  color: #0b2031;
  font-weight: bold;
`;
export const RemoveButton = styled.TouchableOpacity`
  align-items: center;
`;

export const OptionsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  width: ${Dimensions.get('window').width - 40}px;
  justify-content: space-between;
  margin-top: 15px;
`;
export const CartButton = styled.TouchableOpacity`
  background: #cdcdcd;
  width: 34px;
  height: 34px;
  border-radius: 17px;
  padding: 0;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;
export const NextButton = styled.TouchableOpacity`
  background: #e5293e;
  width: 200px;
  height: 35px;
  border-radius: 23px;
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const NextTextButton = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`;
