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

export const ContainerTypes = styled.FlatList.attrs({
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

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  margin-left: 20px;
`;
export const TypeBox = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: ${(Dimensions.get('window').width - 40) / 2}px;
  align-items: center;
  padding: 15px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const TypeImage = styled.Image`
  width: 130px;
  height: 130px;
`;

export const TypeTitle = styled.Text`
  font-size: 18px;
  color: #0b2031;
  text-align: center;
  font-weight: bold;
`;
