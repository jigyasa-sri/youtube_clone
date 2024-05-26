import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./reducers";

const store = configureStore({
  reducer: {
    videos: videoReducer,
  },
});

export default store;
