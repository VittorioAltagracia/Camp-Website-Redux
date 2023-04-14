import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { COMMENTS } from "../../app/shared/COMMENTS";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";

// export const fetchPromotions = createAsyncThunk(
//   "promotions/fetchPromotions",
//   async () => {
//     const response = await fetch(baseUrl + "promotions");
//     if (!response.ok) {
//       return Promise.reject("Unable to fetch, status " + response.status);
//     }
//     const data = await response.json();
//     return data;
//   }
// );

const initialState = {
  commentsArray: COMMENTS,
  // isLoading: true,
  // errMsg: "",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log("addComment action.payload:", action.payload);
      console.log("addComment state.commentsArray:", state.commentsArray);
      const newComment = {
        id: state.commentsArray.length + 1,
        ...action.payload,
      };
      state.commentsArray.push(newComment);
    },
  },
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;
// this is an action creator which creates: addComment action

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
  return state.comments.commentsArray.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};
