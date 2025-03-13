import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DepartmentFilter } from "../type/department-type";

interface IState {
  department: DepartmentFilter;
}

const initialState: IState = {
  department: DepartmentFilter.all,
}

const departmentSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    department: (state, action: PayloadAction<DepartmentFilter>) => {
      state.department = action.payload;
    }
  },
})

export const { actions: departmentActions } = departmentSlice;
export const { reducer: departmentReducer } = departmentSlice;