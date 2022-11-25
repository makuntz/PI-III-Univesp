import { useNavigation } from "@react-navigation/native"
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../Components/Input";
import {
  Container,
  Content,
  LoginInput,
  LoginLabel,
  ContainerInput,
  ContentButton,
  ButtonText,
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
              <Input
                // isInvalid 
                // errorMessage="Digite o E-mail"
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
              <Input 
              // isInvalid 
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
        <ContentButton size={25} onPress={HandleRegister}>
          <ButtonText>Cadastrar</ButtonText>
        </ContentButton>
      </Content>
    </Container>
  );
};
