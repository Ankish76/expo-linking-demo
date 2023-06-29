import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { makeRedirectUri } from "expo-auth-session";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Main;
