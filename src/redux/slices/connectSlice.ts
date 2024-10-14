/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { ConnectState, IdNews } from "../../assets/types/news";
import { db } from "../../firebase/config.ts";

const initialState: ConnectState = {
  news: [],
  backnews: [],
  loading: false,
  error: "",
  idNews: [] as IdNews[] as never,
};

// Fetch all news from Firestore
export const getnews = createAsyncThunk("getnews", async () => {
  const newsCollection = collection(db, "news");
  const newsSnapshot = await getDocs(newsCollection);
  const newsList = newsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as IdNews[]; // Type your returned data
  return newsList;
});

// Fetch specific news by ID from Firestore
export const getId = createAsyncThunk("getId", async (id: string) => {
  const docRef = doc(db, "news", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() } as IdNews;
  } else {
    throw new Error("No such document!");
  }
});

export const connectSlice = createSlice({
  name: "connect",
  initialState,
  reducers: {
    // @ts-ignore
    like: (action: PayloadAction<{ id: string; likes: number }>) => {
      const docRef = doc(db, "news", action.payload.id);
      const likeCount = action.payload.likes ? action.payload.likes + 1 : 1;
      updateDoc(docRef, { likes: likeCount });
    },
    // @ts-ignore
    dislike: (action: PayloadAction<{ id: string; dislikes: number }>) => {
      const docRef = doc(db, "news", action.payload.id);
      const dislikeCount = action.payload.dislikes
        ? action.payload.dislikes + 1
        : 1;
      updateDoc(docRef, { dislikes: dislikeCount });
    },
    // @ts-ignore
    view: (action: PayloadAction<IdNews>) => {
      const docRef = doc(db, "news", action.payload.id);
      const viewCount = action.payload.views ? action.payload.views + 1 : 1;
      updateDoc(docRef, { views: viewCount });
    },
    // @ts-ignore

    deleteNews: (action: PayloadAction<string>) => {
      const docRef = doc(db, "news", action.payload);
      deleteDoc(docRef);
    },
    searchNews: (state, action: PayloadAction<string>) => {
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
    builder.addCase(
      getnews.fulfilled,
      (state, action: PayloadAction<IdNews[]>) => {
        state.loading = false;
        state.news = action.payload;
        state.backnews = action.payload;
      }
    );
    builder.addCase(getnews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Error fetching news.";
    });

    builder.addCase(getId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getId.fulfilled, (state, action: PayloadAction<IdNews>) => {
      state.loading = false;
      state.idNews = action.payload;
    });
    builder.addCase(getId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Error fetching news by ID.";
    });
  },
});

// Export actions
export const { like, dislike, deleteNews, searchNews, view } =
  connectSlice.actions;

export default connectSlice.reducer;
