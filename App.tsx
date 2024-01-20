import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screens from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
        <Screens />
    </Provider>
  );
}

