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

export const RegisterTitle = styled.Text`
  color: #af1817;
  font-weight: bold;
  font-size: ${({ size }) => size || 15}px;
`;

export const RegisterLabel = styled.Text`
  color: #af1817;
  font-weight: bold;
  display: flex;
  width: 290px;
  padding-top: 10px;
  font-size: ${({ size }) => size || 15}px;
`;
export const ContainerInput = styled.View`
  width: 300px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterInput = styled(TextInput)`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  background-color: #f2f2f2;
  margin: 10px;
  padding: 10px;
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
  background-color: #af1817;
  margin-top: ${({ size }) => size || 100}px;
`;
export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 17px;
`;
