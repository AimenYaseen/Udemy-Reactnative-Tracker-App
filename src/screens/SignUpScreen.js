import React, { useState } from "react";
import { Text, Input, Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import Spacer from "../components/Spacer";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={styles.head}>
          Sign Up for Tracker
        </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 120,
  },
  head: {
    alignSelf: "center",
    marginBottom: 25,
  },
});

export default SignUpScreen;
