import Screens from "./src/navigation/stacks";
import { Provider } from "react-redux";
import store from "./src/store";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import RootStack from "./src/navigation/rootStack";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik: require('./assets/fonts/Rubik.ttf'),
    Roboto: require('./assets/fonts/Roboto.ttf'),
    

  })
  if(!fontsLoaded) return (<Text>Loading</Text>)
  return (
    <Provider store={store}>
        <RootStack/>
    </Provider>
  );
}

