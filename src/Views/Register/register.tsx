import {
  ButtonText,
  Container,
  ContainerInput,
  Content,
  RegisterInput,
  RegisterLabel,
  ContentButton,
  RegisterTitle,
} from "./styles"
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../Components/Input";
import { useNavigation } from "@react-navigation/native"
import { propsStack } from "../../Routes/Models"

type FormDataProps = {
  name: string;
  ra: string;
}

export const Register = () => {
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

  const navigation = useNavigation<propsStack>()

   const HandleRegister = () => {
    
      navigation.navigate("Home")
  }
  
  return (
    <>
      <Container>
        <RegisterTitle size={30}>Cadastrar</RegisterTitle>
        <Content>
          <ContainerInput>
            <RegisterLabel>Nome</RegisterLabel>
            <Controller
            control={control}
            name="name"
            rules={{
              required: "Informe o Nome",
              
            }}
            render={({ field: { onChange } }) => (
              <Input
                onChangeText={onChange}
                errorMessage={errors.name?.message}
                
              />
            )}
          />
          <RegisterLabel>R.A.</RegisterLabel>
          <Controller
            control={control}
            name="ra"
            rules={{
              required: "Informe o R.A.",
              
            }}
            render={({ field: { onChange } }) => (
              <Input 
              errorMessage={errors.ra?.message} 
              onChangeText={onChange}
              keyboardType="number-pad"
              />
            )}
          />
          </ContainerInput>

          <ContentButton onPress={handleSubmit(HandleRegister)}>
            <ButtonText>Cadastrar</ButtonText>
          </ContentButton>
        </Content>
      </Container>
    </>
  )
}