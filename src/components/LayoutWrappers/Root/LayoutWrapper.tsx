"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authUserActions } from "@/redux/slices/authUser";
import {
  emitHideGlobalLoader,
  emitShowGlobalLoader,
} from "@/event-emitter/emitters";
import { useReduxUser } from "@/utils/hooks";
import { axiosApiRoute } from "@/lib/axios";
import userService from "@/modules/user/services";

interface RootLayoutWrapperProps {
  children: React.ReactNode;
}

const RootLayoutWrapper: React.FC<RootLayoutWrapperProps> = ({ children }) => {
  // redux
  const me = useReduxUser();
  const dispatch = useDispatch();

  useEffect(() => {
    rehydrateReduxUsingApiRoute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rehydrateReduxUsingApiRoute = async () => {
    try {
      if (me) return;
      emitShowGlobalLoader("Loading profile...");
      const tokenData: { token: string } = await axiosApiRoute.get(
        "/api/auth/token"
      );
      if (!tokenData.token) return;
      const userData = await userService.getUserProfile(tokenData.token);
      dispatch(authUserActions.setAuthUser({ userData }));
    } catch (error) {
      console.log("Rehydrate Failed->", error);
    } finally {
      emitHideGlobalLoader();
    }
  };

  return children;
};

export default RootLayoutWrapper;
