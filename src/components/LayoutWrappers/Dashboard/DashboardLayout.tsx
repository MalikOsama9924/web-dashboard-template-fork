"use client";

import styles from "./styles.module.scss";

import { Box, Container, Drawer, Paper } from "@mui/material";
import { useState } from "react";
import AdminHeader from "@/components/ui/Header/AdminHeader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ui/ErrorFallback/ErrorFallback";
import { DRAWER_WIDTH } from "@/theme/drawer";
import AdminSidebar from "@/components/ui/Sidebar/AdminSidebar";

const DashboardLayoutWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // state
  const [drawerWidth, setDrawerWidth] = useState<number>(DRAWER_WIDTH.OPEN);
  return (
    <>
      <AdminHeader drawerWidth={drawerWidth} />
      <Drawer
        variant="permanent"
        anchor="left"
        className="xs:hidden md:block"
        slotProps={{
          paper: {
            sx: {
              borderRight: "none",
            },
          },
        }}
      >
        <AdminSidebar
          drawerWidth={drawerWidth}
          setDrawerWidth={setDrawerWidth}
          renderActions
        />
      </Drawer>
      <Box
        className={`${styles["dashboard-main-container"]}`}
        sx={{
          paddingLeft: {
            xs: 0,
            md: `${drawerWidth}px`,
          },
        }}
      >
        <Container className={styles["content-container"]}>
          <Paper
            elevation={0}
            className={styles["paper-container"]}
          >
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <div>{children}</div>
            </ErrorBoundary>
          </Paper>
        </Container>
        {/* <Footer /> */}
      </Box>
    </>
  );
};

export default DashboardLayoutWrapper;
