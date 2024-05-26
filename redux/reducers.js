import { createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./actions";

const initialState = {
  videos: [],
  loading: false,
  error: null,
  selectedVideo: null,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setSelectedVideo: (state, action) => {
      state.selectedVideo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload.data;
      })
      .addCase(getVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedVideo } = videoSlice.actions;

export default videoSlice.reducer;
