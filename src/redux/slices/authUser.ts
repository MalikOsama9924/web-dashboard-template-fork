import type { AuthUserType, UserType } from "@/modules/user/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthUserType = {
  user: null,
};

export const authUserSlice = createSlice({
  name: "auth-user",
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<{ userData: UserType }>) => {
      const { userData } = action.payload;

      const newState = {
        ...state,
        user: userData,
      };
      return newState;
    },
    removeAuthUser: () => {
      const newState = {
        ...initialState,
      };
      return newState;
    },
  },
});

export const authUserActions = authUserSlice.actions;

export default authUserSlice.reducer;
