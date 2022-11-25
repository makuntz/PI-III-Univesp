import styled from "styled-components/native";
import univespLogo from "../../../assets/logo-univesp.png";

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #e9482c;
`;

export const Content = styled.View`
  border: 1.5px solid white;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 70%;
  background-color: #e9482c;
  border-radius: 10px;
`;

export const ContentButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  color: white;
  font-weight: bold;
  border: 1px solid white;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 0 0;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const ContentImage = styled.View`
  width: 200px;
  height: 230px;
  background-color: #f2f2f2;
`;

export const UnivespLogo = styled.Image.attrs({
  source: univespLogo,
})`
  width: ${({ size }) => size || 200}px;
  height: ${({ size }) => size || 230}px;
  background-color: #f2f2f2;
`;
