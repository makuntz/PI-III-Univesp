import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
`;
export const Content = styled.View`
  border: 1.5px solid white;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 70%;
  background-color: white;
  border-radius: 10px;
`;

export const HomeLabel = styled.Text`
  color: #e9482c;
  font-weight: bold;
  margin: 0 0 5px 0;
  font-size: ${({ size }) => size || 15}px;
`;
export const ContainerInput = styled.View`
  width: 300px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeInput = styled(TextInput)`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: #f1f5f4;
  margin: 10px;
`;
export const ContentButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  color: white;
  font-weight: bold;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0 0 0;
  background-color: #e9482c;
`;
export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 17px;
`;
export const ContentButtonLogout = styled.View`
  height: 50px;
  background-color: white;
  display: flex;
  align-items: flex-end;
`;

export const ButtonLogout = styled.Text`
  color: white;
  width: 50px;
  font-size: 17px;
  margin: 10px 0 0 0;
`;
