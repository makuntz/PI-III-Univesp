import { FormControl, IInputProps, Input as NativeBaseInput } from "native-base";

type Props = IInputProps & {
  errorMessage?: string | null
}

export const Input = ({errorMessage = null, isInvalid, ...rest }: Props) => {

  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl mb={6} isInvalid={invalid}>
      <NativeBaseInput 
        isInvalid={invalid}
        bg="gray.800"
        fontSize="md"
        borderRadius= "8"
        _focus={{
          bg: "gray.300",
          borderWidth: 1,
          borderColor: "#e9482c"
        }}
        {...rest}
      />
      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  )
};