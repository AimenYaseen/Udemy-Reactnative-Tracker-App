import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
} from "react-navigation";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import AccountScreen from "./src/screens/AccountScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const switchNavigator = createSwitchNavigator({
  loginFlow: createNativeStackNavigator({
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createNativeStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailsScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

export default createAppContainer(switchNavigator);
