import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "https://e932-119-160-97-197.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    //console.log(token);
    // console.log(config);
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
