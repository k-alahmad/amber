import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.open = true;
    },
    hideModal: (state, action) => {
      state.open = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export const selectModal = (state) => state.modal;
export const selectState = (state) => state.modal.open;

export default modalSlice.reducer;
