import { NativeBaseProvider } from "native-base";
import { Route } from "./src/Routes";


export default function App() {

  return (
    <NativeBaseProvider>
      <Route/>
    </NativeBaseProvider>
  );
}
