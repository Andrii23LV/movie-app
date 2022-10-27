import { configureStore } from "@reduxjs/toolkit";
import saveGuestId from "./reducers/saveGuestId";

export default configureStore({
  reducer: {
    saveGuestId: saveGuestId,
  },
});
