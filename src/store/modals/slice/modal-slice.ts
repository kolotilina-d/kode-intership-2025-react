import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { IModal } from "../types/i-modal";

interface IState {
  name: IModal;
}

const initialState: IState = {
  name: '',
}

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<IModal>) {
      state.name = action.payload;
    },
    closeModal(state) {
      state.name = '';
    },
  },
})

export const { actions: modalsActions } = modalSlice;
export const { reducer: modalsReducer } = modalSlice;