import { createAsyncThunk } from "@reduxjs/toolkit";

export const GET_YT_VIDEOS = "GET_YT_VIDEOS";

const API_URL = "https://impactmindz.in/client/boub/back_end/api/product";

export const getVideos = createAsyncThunk(GET_YT_VIDEOS, async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
});
