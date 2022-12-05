import styled from "styled-components/native";
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
  width: 80%;
  height: 70%;
  background-color: white;
  border-radius: 10px;
`;

export const ContentButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  color: white;
  font-weight: bold;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 0 0;
  background-color: #af1817
  ;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const ContentImage = styled.View`
  width: 100%;
  height: 50%;
`;

export const UnivespLogo = styled.Image.attrs({
  source: univespLogo,
})`
  width: ${({ size }) => size || 100}%;
  height: ${({ size }) => size || 50}%;
`;
