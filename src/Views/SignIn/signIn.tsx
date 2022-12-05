import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../Routes/Models"
import {
  Container,
  Content,
  ContentButton,
  UnivespLogo,
  ContentImage,
  ButtonText,
} from "./styles"

export const SignIn = () => {
   const navigation = useNavigation<propsStack>()

   const HandleLogin = () => {
     return navigation.navigate("Login")
   }

  return (
    <Container>
      <Content>
        <ContentImage>
          <UnivespLogo />
        </ContentImage>

        <ContentButton onPress={HandleLogin}>
          <ButtonText>Entrar</ButtonText>
        </ContentButton>
      </Content>
    </Container>
  )
}
