import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SignInScreen = () => {
  const { state, signin, remove_error } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        // onWillFocus={() => {}} called when we are about to navigate to screen
        // onDidFocus={() => {}}  called when we navigate to screen
        onWillBlur={remove_error} // called when we are about to navigate away from screen
        // onDidBlur={() => {}}  called when we navigate away from screen
      />
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
