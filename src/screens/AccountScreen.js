import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h1 style={styles.text}>
        Account Screen
      </Text>
      <Spacer />
      <Spacer>
        <Button
          title="Sign Out"
          onPress={() => {
            signout();
          }}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    marginTop: 50,
    fontSize: 45,
  },
});

export default AccountScreen;
