import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ConnectState {
  news: object[];

  backnews: object[];

  loading: boolean;
  error: string;
  idNews: object[];
}

const initialState = {
  news: [],
  backnews: [],
  loading: false,
  error: "",
  idNews: [],
} as ConnectState;

export const getnews = createAsyncThunk("getnews", async () => {
  const response = await axios(
    "https://6576df5f197926adf62ca419.mockapi.io/news"
  );
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
    like: (state, action) => {
      const updLike: number = action.payload.likes + 1;
      const obj = {
        authors: action.payload.authors,
        category: action.payload.category,
        date: action.payload.date,
        dislikes: action.payload.dislikes,
        id: action.payload.id,
        image: action.payload.image,
        likes: updLike,
        text: action.payload.text,
        title: action.payload.title,
        topic: action.payload.topic,
        views: action.payload.views9,
      };
      axios.put(
        "https://6576df5f197926adf62ca419.mockapi.io/news/" + action.payload.id,
        obj
      );
    },
    dislike: (state, action) => {
      const updDislike: number = action.payload.dislikes - 1;
      const obj = {
        authors: action.payload.authors,
        category: action.payload.category,
        date: action.payload.date,
        dislikes: updDislike,
        id: action.payload.id,
        image: action.payload.image,
        likes: action.payload.likes,
        text: action.payload.text,
        title: action.payload.title,
        topic: action.payload.topic,
        views: action.payload.views9,
      };
      axios.put(
        "https://6576df5f197926adf62ca419.mockapi.io/news/" + action.payload.id,
        obj
      );
    },
    deleteNews: (state, action) => {
      axios.delete(
        "https://6576df5f197926adf62ca419.mockapi.io/news/" + action.payload
      );
    },
    searchNews: (state, action) => {
      const inputValue = action.payload.toLowerCase().trim();
      if (inputValue !== "") {
        state.backnews = state.news.filter((elem) =>
          elem.title.toLowerCase().includes(inputValue)
        );
      } else {
        state.backnews = [...state.news];
      }
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
    });
    builder.addCase(getnews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    // getId
    builder.addCase(getId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getId.fulfilled, (state, action) => {
      state.loading = false;
      state.idNews = action.payload;
      state.backnews = action.payload;
    });
    builder.addCase(getId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

//export
export const { like, dislike, deleteNews, searchNews } = connectSlice.actions;

// export const selectCount = (state: RootState) => state.connect.value;

export default connectSlice.reducer;
