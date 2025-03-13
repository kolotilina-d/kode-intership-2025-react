import { configureStore } from "@reduxjs/toolkit";
import { searchValueReducer } from "./searchValue/slice/searchValue-slice";
import { modalsReducer } from "./modals/slice/modal-slice";
import { teamReducer } from "./team/slice/team-slice";
import { departmentReducer } from "./deprtment/slice/department-slice";

const store = configureStore({
  reducer: {
    modals: modalsReducer,
    searchValue: searchValueReducer,
    team: teamReducer,
    department: departmentReducer,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

