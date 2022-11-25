import {
  ButtonText,
  Container,
  Content,
  ContentButton,
  HomeInput,
  HomeLabel,
  ButtonLogout,
  ContentButtonLogout,
} from "./styles"
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../Routes/Models"
import { Input } from "../../Components/Input";
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
    return navigation.navigate("SignIn")
  }

  return (
    <>
      <ContentButtonLogout >
        <ButtonLogout onPress={HandleLogout}>Sair</ButtonLogout>
      </ContentButtonLogout>
      <Container>
        <Content>
          <HomeLabel>Nota das Atividades</HomeLabel>
              <Input
                keyboardType="number-pad"
                onChangeText={setNotaAtividade}
              />
            
          
          <HomeLabel>Nota da Prova</HomeLabel>
              <Input 
              keyboardType="number-pad"
              onChangeText={setNotaProva}
              />
              
            <HomeLabel size={25}>Média Final : {totalGrade !== 0 ? totalGrade : ""}</HomeLabel>
          <ContentButton onPress={GradeCalculate}>
            <ButtonText>Calcular</ButtonText>
          </ContentButton>
        </Content>
      </Container>
    </>
  )
}
