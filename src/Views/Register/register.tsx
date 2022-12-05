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
        <RegisterTitle size={25}>Cadastro</RegisterTitle>
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
              <RegisterInput
                placeholder="Digite seu nome"
                onChangeText={onChange}
                errorMessage={errors.name?.message}
                
              />
            )}
          />
          <RegisterLabel>Registro acadêmico</RegisterLabel>
          <Controller
            control={control}
            name="ra"
            rules={{
              required: "Informe o R.A.",
              
            }}
            render={({ field: { onChange } }) => (
              <RegisterInput 
              placeholder="Digite seu R.A."
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