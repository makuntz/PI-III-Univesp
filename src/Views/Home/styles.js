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
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: white;
  border-radius: 10px;
`;

export const HomeLabel = styled.Text`
  color: #af1817;
  font-weight: bold;
  margin-top: ${({ margintop }) => margintop || 0}px;
  font-size: ${({ size }) => size || 15}px;
  text-align: center;
`;

export const Result = styled.Text`
  color: black;
  font-weight: 600;
  margin-top: ${({ margintop }) => margintop || 0}px;
  font-size: ${({ size }) => size || 15}px;
  text-align: center;
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
  background-color: #f2f2f2;
  text-align: center;
  margin: 10px;
  padding: 10px;
`;

export const ContentButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  color: white;
  font-weight: bold;
  width: 80%;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px
  background-color: #af1817;
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
  width: 50px;
  font-size: 17px;
  color: black;
  margin: 0 20px 0 0;
  padding: 5px;
  background-color: #f2f2f2;
  text-align: center;
  border-radius: 10px;
`;

export const ContentImage = styled.View`
  margin-bottom: 50px
  margin-top: -150px
  width: 100%;
  height: 20%;
`;

export const UnivespLogo = styled.Image.attrs({
  source: univespLogo,
})`
  width: ${({ size }) => size || 100}%;
  height: ${({ size }) => size || 100}%;
`;