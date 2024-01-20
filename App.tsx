import Screens from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Rubik: require('./assets/fonts/Rubik.ttf'),

  })
  if(!fontsLoaded) return (<Text>Loading</Text>)
  return (
    <Provider store={store}>
        <Screens />
    </Provider>
  );
}

