import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  registered: JSON.parse(localStorage.getItem("Registered")) ?? false,
  counterFull: JSON.parse(localStorage.getItem("CounterFull")) ?? false,
  download: false,
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
    downloadBrochure: (state, action) => {
      state.download = true;
    },
    notDownloadBrochure: (state, action) => {
      state.download = true;
    },
    register: (state, aciton) => {
      state.registered = true;
      localStorage.setItem("Registered", true);
      state.download = false;
    },
    counterIsFull: (state, action) => {
      state.counterFull = true;
      localStorage.setItem("CounterFull", true);
    },
    counterIsNotFull: (state, action) => {
      state.counterFull = false;
      localStorage.setItem("CounterFull", false);
    },
  },
});

export const {
  showModal,
  hideModal,
  register,
  counterIsFull,
  counterIsNotFull,
  downloadBrochure,
  notDownloadBrochure,
} = modalSlice.actions;
export const selectModal = (state) => state.modal;
export const selectState = (state) => state.modal.open;
export const selectRegisterState = (state) => state.modal.registered;
export const selectDownloadState = (state) => state.modal.download;
export const selectCounterState = (state) => state.modal.counterFull;

export default modalSlice.reducer;
