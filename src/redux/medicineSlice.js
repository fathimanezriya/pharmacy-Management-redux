import { createSlice } from "@reduxjs/toolkit";

const initial = {
  list: JSON.parse(localStorage.getItem("medicines") || "[]"),
};

const persist = (list) => {
  localStorage.setItem("medicines", JSON.stringify(list));
};

const medicinesSlice = createSlice({
  name: "medicines",
  initialState: initial,
  reducers: {
    addMedicine(state, action) {
      state.list.push(action.payload);
      persist(state.list);
    },
    updateMedicine(state, action) {
      const idx = state.list.findIndex((m) => m.id === action.payload.id);
      if (idx !== -1) state.list[idx] = action.payload;
      persist(state.list);
    },
    deleteMedicine(state, action) {
      state.list = state.list.filter((m) => m.id !== action.payload);
      persist(state.list);
    },
  },
});

export const { addMedicine, updateMedicine, deleteMedicine } = medicinesSlice.actions;
export default medicinesSlice.reducer;
