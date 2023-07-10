import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  registered: false,
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
    register: (state, aciton) => {
      state.registered = true;
    },
  },
});

export const { showModal, hideModal, register } = modalSlice.actions;
export const selectModal = (state) => state.modal;
export const selectState = (state) => state.modal.open;
export const selectRegisterState = (state) => state.modal.registered;

export default modalSlice.reducer;
