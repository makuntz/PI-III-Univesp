import styled from "styled-components/native";
import { TextInput } from "react-native";
import univespLogo from "../../../assets/logo-univesp.png";

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
  background-color: white;
  border-radius: 10px;
`;

export const LoginLabel = styled.Text`
  color: #af1817;
  font-weight: bold;
  margin: 0 0 20px 0;
  font-size: 15px;
`;
export const ContainerInput = styled.View`
  width: 300px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginInput = styled(TextInput)`
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
  margin-top: ${({ size }) => size || 50}px;
`;

export const ContentButton2 = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  color: white;
  font-weight: bold;
  width: 250px;
  height: 40px;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color: #af1817;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  margin-top: ${({ size }) => size || 100}px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 17px;
`;

export const ButtonText2 = styled.Text`
  color: #af1817;
  font-weight: bold;
  font-size: 17px;
`;

export const ContentImage = styled.View`
  margin-bottom: 50px
  margin-top: -50px
  width: 100%;
  height: 20%;
`;

export const UnivespLogo = styled.Image.attrs({
  source: univespLogo,
})`
  width: ${({ size }) => size || 100}%;
  height: ${({ size }) => size || 100}%;
`;