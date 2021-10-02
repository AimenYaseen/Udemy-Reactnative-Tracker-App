import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import AuthForm from "../components/Authform";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignInScreen = () => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        text="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <NavLink
        linkText="Don't have an account? So SignUp instead!"
        routeName="SignUp"
      />
    </View>
  );
};

SignInScreen.navigationOptions = () => {
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
});

export default SignInScreen;
