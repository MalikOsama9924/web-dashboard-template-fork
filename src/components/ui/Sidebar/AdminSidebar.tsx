"use client";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, List } from "@mui/material";
import React, { useEffect, useState } from "react";
import { routes } from "@/routes/admin";
import AdminSidebarActions from "./Actions/AdminSidebarActions";
import RenderSidebarList from "./RenderSidebarList";
import { DRAWER_WIDTH } from "@/theme/drawer";
import type { SidebarProps } from "./types";
import type { RouteTypes } from "@/routes/types";

const AdminSidebar: React.FC<SidebarProps> = ({
  drawerWidth,
  handleSidebarDrawerClose,
  setDrawerWidth,
  renderToggleButton,
  renderActions,
}) => {
  // state
  const [filterRoutes, setFilterRoutes] = useState<RouteTypes[]>([]);

  useEffect(() => {
    let arr = [];
    arr = routes.filter((item) => item.sidebar);
    setFilterRoutes(arr);
  }, []);

  const toggleDrawer = () => {
    if (!setDrawerWidth) return;

    if (drawerWidth === DRAWER_WIDTH.CLOSED) {
      setDrawerWidth(DRAWER_WIDTH.OPEN);
    } else {
      setDrawerWidth(DRAWER_WIDTH.CLOSED);
    }
  };

  return (
    <Box
      sx={{ width: drawerWidth }}
      className={`sidebar-container`}
    >
      <Box className="logo-box">
        <h5 className="logo-heading text-center">[Logo]</h5>
      </Box>
      <Box className="links-box">
        <List className="navLink">
          {filterRoutes.map((route) => (
            <RenderSidebarList
              key={route.path}
              route={route}
              drawerWidth={drawerWidth}
              handleSidebarDrawerClose={handleSidebarDrawerClose}
            />
          ))}
        </List>
      </Box>

      {renderActions && (
        <div className="drawer-footer-actions">
          <AdminSidebarActions drawerWidth={drawerWidth} />
          {renderToggleButton && (
            <Box className="drawer-toggle-btn">
              <Button
                onClick={toggleDrawer}
                fullWidth
                color="primary"
                variant="contained"
              >
                {drawerWidth === DRAWER_WIDTH.OPEN ? (
                  <ArrowBackIos style={{ fontSize: "inherit" }} />
                ) : (
                  <ArrowForwardIos style={{ fontSize: "inherit" }} />
                )}
              </Button>
            </Box>
          )}
        </div>
      )}
    </Box>
  );
};

export default AdminSidebar;
