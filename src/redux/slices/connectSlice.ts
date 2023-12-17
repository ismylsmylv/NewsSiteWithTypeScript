import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ConnectState {
  news: object[];
  backnews: object[];
  loading: boolean;
  error: string;
}

const initialState = {
  news: [],
  backnews: [],
  loading: false,
  error: "",
} as ConnectState;

export const getnews = createAsyncThunk("getnews", async () => {
  const response = await axios(
    "https://6576df5f197926adf62ca419.mockapi.io/news"
  );
  //   console.log(response);
  return response.data;
});

export const getId = createAsyncThunk("getId", async (id) => {
  const response = await axios(
    "https://6576df5f197926adf62ca419.mockapi.io/news/" + id
  );
  return response.data;
});

export const connectSlice = createSlice({
  name: "connect",
  initialState,
  reducers: {
    getNews: (state, action: PayloadAction<object[]>) => {
      console.log(state.news);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getnews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getnews.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
      state.backnews = action.payload;
      //   console.log(state.news);
    });
    builder.addCase(getnews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // getId
    builder.addCase(getId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getId.fulfilled, (state, action) => {
      state.loading = false;
      state.news = action.payload;
      state.backnews = action.payload;
      //   console.log(state.news);
    });
    builder.addCase(getId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

//export
export const { getNews } = connectSlice.actions;

// export const selectCount = (state: RootState) => state.connect.value;

export default connectSlice.reducer;
