import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types/team-types";
import { loadTeam } from "../services/load-team";

interface IState {
  team: IUser[];
  loading: boolean;
  error: string | null;
}

const initialState: IState = {
  team: [{
    avatarUrl: '',
    birthday: '',
    department: '',
    firstName: '',
    id: '',
    lastName: '',
    phone: '',
    position: '',
    userTag: '',
  }],
  loading: false,
  error: null,
}

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      // Получаем данные команды
      .addCase(loadTeam.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loadTeam.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.team = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(loadTeam.rejected, (state) => {
        state.loading = false;
        state.error = 'Error load team';
      })


  },
})

export const { actions: teamActions } = teamSlice;
export const { reducer: teamReducer } = teamSlice;