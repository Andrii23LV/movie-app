import { createSlice } from "@reduxjs/toolkit";

export const saveGuestId = createSlice({
  name: "guestId",
  initialState: {
    id: "",
  },
  reducers: {
    guestId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { guestId } = saveGuestId.actions;

export default saveGuestId.reducer;
