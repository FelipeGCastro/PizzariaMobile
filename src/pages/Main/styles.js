import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #eceef3;
`;
export const ContainerContent = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;
export const ContainerProducts = styled.FlatList.attrs({
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
export const CartButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background: #e5293e;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  padding: 0;
  margin-right: 20px;
  align-items: center;
  justify-content: center;
`;
export const HistoryButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  border-radius: 20px;
  padding: 0;
  margin-left: 20px;
`;
export const MenuBox = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  background: #fff;
  flex-direction: row;
  width: ${Dimensions.get('window').width - 40}px;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
`;
export const ImageMenu = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 4px;
  margin-right: 10px;
`;
export const MenuInfo = styled.View`
  flex: 1;
`;
export const MenuName = styled.Text`
  font-size: 14px;
  color: #0b2031;
  text-align: left;
  margin-bottom: 5px;
`;
export const MenuDescription = styled.Text`
  font-size: 13px;
  color: #706e7b;
  margin-bottom: 5px;
`;
export const TimeInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const TimeText = styled.Text`
  font-size: 12px;
  color: #706e7b;
`;
