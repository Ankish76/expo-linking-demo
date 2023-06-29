import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
  Text,
} from "react-native-paper";
import * as Linking from "expo-linking";
import Main from "./screens/Main";
import { name as appName } from "./app.json";

const prefix = Linking.createURL("/");
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};
const config = {
  screens: {
    About: "about",
    Home: "home",
  },
};
const linking = {
  prefixes: [prefix, "https://demo.example.com"],
  config,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Main />
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
