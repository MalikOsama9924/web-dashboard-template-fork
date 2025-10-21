"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootLayoutWrapper from "@/components/LayoutWrappers/Root/LayoutWrapper";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "sonner";
import { sonner } from "@/theme/theme-config";
import MuiThemeProvider from "./MuiThemeProvider";
import { Next13ProgressBar } from "next13-progressbar";
import { CssBaseline } from "@mui/material";
import Spinner from "../ui/Spinner/Spinner";
import { useEffect } from "react";
import { EVENT_BUS_EVENTS } from "@/event-emitter/event-constants";
import { useRouter } from "next/navigation";
import EventBus from "@/event-emitter/index";
import { axiosApiRoute, clearTokenCache } from "@/lib/axios";
import authService from "@/modules/auth/services";
import GlobalLoader from "../ui/GlobalLoader/GlobalLoader";

import "@/lib/socket";

interface ProvidersProps {
  children: React.ReactNode;
}

// react query
const queryClient = new QueryClient();

const RootProvider: React.FC<ProvidersProps> = ({ children }) => {
  // router
  const router = useRouter();

  // listen for logout event
  useEffect(() => {
    EventBus.on(EVENT_BUS_EVENTS.LOGOUT, handleLogout);

    return () => {
      EventBus.off(EVENT_BUS_EVENTS.LOGOUT, handleLogout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    // remove cookie
    try {
      await Promise.all([
        axiosApiRoute.post("/api/auth/logout"),
        authService.logoutUser(),
      ]);

      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    } finally {
      // clear token cache
      clearTokenCache();
    }
  };

  return (
    <>
      <Next13ProgressBar
        options={{
          showSpinner: false,
        }}
      />
      <Toaster
        position={sonner.position}
        expand={sonner.expand}
        closeButton={sonner.closeButton}
        richColors={sonner.richColors}
        visibleToasts={sonner.visibleToasts}
        icons={{
          loading: <Spinner size={4} />,
        }}
        toastOptions={{
          duration: sonner?.toastOptions?.duration || 4000,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <NextThemeProvider
          attribute="class"
          enableSystem={false}
        >
          <MuiThemeProvider>
            <CssBaseline />
            <ReduxProvider store={store}>
              <RootLayoutWrapper>
                <main>{children}</main>
                <GlobalLoader />
              </RootLayoutWrapper>
            </ReduxProvider>
          </MuiThemeProvider>
        </NextThemeProvider>
      </QueryClientProvider>
    </>
  );
};

export default RootProvider;
