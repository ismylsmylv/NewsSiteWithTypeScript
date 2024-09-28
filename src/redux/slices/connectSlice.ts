import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/config.js";
import { ConnectState } from "../../assets/types/news";

const initialState = {
  news: [],
  backnews: [],
  loading: false,
  error: "",
  idNews: [],
} as unknown as ConnectState;

// Fetch all news from Firestore
export const getnews = createAsyncThunk("getnews", async () => {
  const newsCollection = collection(db, "news");
  const newsSnapshot = await getDocs(newsCollection);
  const newsList = newsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return newsList;
});

// Fetch specific news by ID from Firestore
export const getId = createAsyncThunk("getId", async (id) => {
  const docRef = doc(db, "news", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    throw new Error("No such document!");
  }
});

export const connectSlice = createSlice({
  name: "connect",
  initialState,
  reducers: {
    like: (state, action) => {
      const docRef = doc(db, "news", action.payload.id);
      updateDoc(docRef, { likes: action.payload.likes + 1 });
    },
    dislike: (state, action) => {
      const docRef = doc(db, "news", action.payload.id);
      updateDoc(docRef, { dislikes: action.payload.dislikes + 1 });
    },
    deleteNews: (state, action) => {
      const docRef = doc(db, "news", action.payload);
      deleteDoc(docRef);
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
      state.error = action.error.message || "Error fetching news.";
    });

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
      state.error = action.error.message || "Error fetching news by ID.";
    });
  },
});

// Export actions
export const { like, dislike, deleteNews, searchNews } = connectSlice.actions;

export default connectSlice.reducer;
