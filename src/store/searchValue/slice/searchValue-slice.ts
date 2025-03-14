import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  searchValue: string;
  selectedFilter: string;
}

const initialState: IState = {
  searchValue: '',
  selectedFilter: '',
}

const searchValueSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSelectedFilter: (state, action: PayloadAction<string>) => {
      state.selectedFilter = action.payload;
    }
  },
})

export const { actions: searchValueActions } = searchValueSlice;
export const { reducer: searchValueReducer } = searchValueSlice;
