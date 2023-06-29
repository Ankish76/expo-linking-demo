import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import getEnvVars from "../environment";

WebBrowser.maybeCompleteAuthSession();

const { github_clinetId } = getEnvVars();
// Endpoint
const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint: `https://github.com/settings/connections/applications/${github_clinetId}`,
};

const Main = ({ navigation }) => {
  const [loginRes, setLoginRes] = React.useState(null);
  const redirectUri = makeRedirectUri({
    scheme: "mydemo.app",
    path: "home",
  });
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: github_clinetId,
      scopes: ["identity"],
      redirectUri: encodeURI(redirectUri),
    },
    discovery
  );
  React.useEffect(() => {
    if (response?.type === "success") {
      setLoginRes(response?.params?.code);
    }
  }, [response]);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("About")}
      >
        Go to About
      </Button>
      {!loginRes ? (
        <Button
          style={styles.button}
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        >
          Login
        </Button>
      ) : null}
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
  button: {
    paddingBottom: 16,
  },
});

export default Main;
