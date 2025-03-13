import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../types/team-types";
import api from "../../../shared/config/api";

export const loadTeam = createAsyncThunk<IUser[], { type: string }>(
  "team/loadTeam",
  async function ({type}) {
    const response = await api.get(`users?__example=${type}`
    )
    return await response.data as IUser[];
  }
)

