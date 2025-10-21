import { combineReducers } from "@reduxjs/toolkit";

// reducers
import authUserReducer from "./authUser";
import type { AuthUserType } from "@/modules/user/types";

// make sure to add types of new reducers in types/redux/store.types.ts
const rootReducer = combineReducers({
  authUser: authUserReducer,
});

export type ReduxStoreTypes = {
  authUser: AuthUserType;
};

export default rootReducer;
