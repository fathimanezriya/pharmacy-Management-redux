import { configureStore } from "@reduxjs/toolkit";
import medicinesReducer from "./medicineSlice";

export const store = configureStore({
  reducer: {
    medicines: medicinesReducer,
  },
});
