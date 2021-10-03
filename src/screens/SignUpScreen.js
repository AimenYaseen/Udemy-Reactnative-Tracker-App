import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignUpScreen = () => {
  const { state, signup, remove_error, automaticSignIn } =
    useContext(AuthContext);

  useEffect(() => {
    automaticSignIn();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={remove_error} />
      <AuthForm
        text="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <NavLink
        linkText="Already have an account? So SignIn"
        routeName="SignIn"
      />
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
});

export default SignUpScreen;
