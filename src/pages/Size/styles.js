import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #eceef3;
  /* align-items: center; */
`;
export const ContainerContent = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 0 15px;
`;
export const ContainerSizes = styled.FlatList.attrs({
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
export const SizeBox = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: ${(Dimensions.get('window').width - 40) / 2}px;
  align-items: center;
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  margin-right: 10px;
  margin-bottom: 10px;
  height: 200px;
  justify-content: space-between;
`;

export const SizeImage = styled.Image`
  width: 110px;
  height: 110px;
  margin-bottom: 15px;
`;

export const SizeInfo = styled.View``;

export const SizeTitle = styled.Text`
  font-size: 18px;
  color: #0b2031;
  text-align: center;
  font-weight: bold;
`;
export const SizePrice = styled.Text`
  font-size: 17px;
  color: #0b2031;
  opacity: 0.6;
  text-align: center;
  font-weight: bold;
`;
