import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../../src/Views/Login/login";
import { SignIn } from "../../src/Views/SignIn/signIn";
import { Register } from "../../src/Views/Register/register";
import { Home } from "../../src/Views/Home/home";
import { propsNavigationStack } from "./Models";

export const Route = () => {

    const Stack = createStackNavigator<propsNavigationStack>();

    return(
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}