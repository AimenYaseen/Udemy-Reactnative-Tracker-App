import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  const response = await trackerApi.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: response.data });
};
const saveTrack = (dispatch) => async (name, locations) => {
  try {
    // console.log(config);
    await trackerApi.post("/tracks", { name, locations });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, saveTrack },
  []
);
