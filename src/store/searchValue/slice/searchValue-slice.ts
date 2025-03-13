import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  searchValue: string;
}

const initialState: IState = {
  searchValue: '',
}

const searchValueSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    }
  },
})

export const { actions: searchValueActions } = searchValueSlice;
export const { reducer: searchValueReducer } = searchValueSlice;