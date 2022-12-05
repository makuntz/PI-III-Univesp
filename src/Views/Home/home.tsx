import {
  ButtonText,
  Container,
  Content,
  ContentButton,
  HomeInput,
  HomeLabel,
  Result,
  ButtonLogout,
  ContentButtonLogout,
  UnivespLogo,
  ContentImage,
} from "./styles"
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../Routes/Models"
import { useState } from "react";


export const Home = () => {
  const [notaAtividade, setNotaAtividade] = useState(0)
  const [notaProva, setNotaProva] = useState(0)
  const [totalGrade, setTotalGrade] = useState(0)
  
  const GradeCalculate = () => {
        setTotalGrade((notaProva * 0.6) + (notaAtividade * 0.4 ))
  }

  const navigation = useNavigation<propsStack>()

 
  const HandleLogout = () => {
    return navigation.navigate("Login")
  }

  return (
    <>
      <ContentButtonLogout >
        <ButtonLogout onPress={HandleLogout}>Sair</ButtonLogout>
      </ContentButtonLogout>
      <Container>
      <ContentImage>
        <UnivespLogo />
      </ContentImage>
        <Content>
          <HomeLabel>Nota das Atividades</HomeLabel>
                <HomeInput
                keyboardType="number-pad"
                onChangeText={setNotaAtividade}
                />
              
          
          <HomeLabel>Nota da Prova</HomeLabel>
              <HomeInput
              keyboardType="number-pad"
              onChangeText={setNotaProva}
              />
          <ContentButton onPress={GradeCalculate}>
            <ButtonText>Calcular</ButtonText>
          </ContentButton>  
            <Result size={17} margintop={25}>{totalGrade !== 0 ? 'A média final é ' + totalGrade : ""} </Result>
        </Content>
      </Container>
    </>
  )
}
