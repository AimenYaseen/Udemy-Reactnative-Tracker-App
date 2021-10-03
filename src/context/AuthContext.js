import AsyncStorage from "@react-native-async-storage/async-storage";
import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "show_error":
      return { ...state, errorMessage: action.payload };
    case "signin":
      return { token: action.payload, errorMessage: "" };
    case "remove_error":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const automaticSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "signin", payload: token });
    navigate("TrackList");
  } else {
    navigate("loginFlow");
  }
};

const remove_error = (dispatch) => () => {
  dispatch({ type: "remove_error" });
};

const signin =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "show_error",
        payload: "Something went wrong with sign in",
      });
    }
  };

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });

      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "show_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signout = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout, remove_error, automaticSignIn },
  { token: "", errorMessage: "" }
);
