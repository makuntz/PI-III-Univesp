import { useNavigation } from "@react-navigation/native"
import { useForm, Controller } from "react-hook-form";
import {
  Container,
  Content,
  LoginInput,
  LoginLabel,
  ContainerInput,
  ContentButton,
  ContentButton2,
  ButtonText,
  ButtonText2,
  UnivespLogo,
  ContentImage,
} from "./styles";

import { propsStack } from "../../Routes/Models"
type FormDataProps = {
  name: string;
  ra: string;
}

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

   const navigation = useNavigation<propsStack>()

   const HandleLogin = () => {
    navigation.navigate("Home")
   }

  const HandleRegister = () => {
    
    navigation.navigate("Register")
  };

  return (
    <Container>
      <ContentImage>
        <UnivespLogo />
      </ContentImage>
      <Content>
        <ContainerInput>
          <LoginLabel>Login</LoginLabel>
          <Controller
            control={control}
            name="name"
            rules={{
              required: "Informe o Nome",
              
            }}
            render={({ field: { onChange } }) => (
              <LoginInput
                // isInvalid 
                // errorMessage="Digite o E-mail"
                placeholder="Digite seu nome"
                onChangeText={onChange}
                errorMessage={errors.name?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="ra"
            rules={{
              required: "Informe o R.A.",
              
            }}
            render={({ field: { onChange } }) => (
              <LoginInput 
              // isInvalid 
              placeholder="Digite seu R.A."
              errorMessage={errors.ra?.message} 
              onChangeText={onChange}
              keyboardType="number-pad"
              />
              
            )}
          />
        </ContainerInput>
        <ContentButton onPress={handleSubmit(HandleLogin)}>
          <ButtonText>Acessar</ButtonText>
        </ContentButton>
        <ContentButton2 size={25} onPress={HandleRegister}>
          <ButtonText2>Cadastrar</ButtonText2>
        </ContentButton2>
      </Content>
    </Container>
  );
};
