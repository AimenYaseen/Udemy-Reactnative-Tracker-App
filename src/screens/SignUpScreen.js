import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/Authform";
import NavLink from "../components/NavLink";

const SignUpScreen = () => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
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
