import AsyncStorage from "@react-native-async-storage/async-storage";
import trackerApi from "../api/tracker";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "show_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { token: action.payload, errorMessage: "" };
    default:
      return state;
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {};
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
    } catch (err) {
      dispatch({
        type: "show_error",
        payload: "Something went wrong with sign up",
      });
    }
  };

const signout = (dispatch) => {
  return () => {};
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: "", errorMessage: "" }
);
