import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, List, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserSidebarActions from "./Actions/UserSidebarActions";
import RenderSidebarList from "./RenderSidebarList";
import { DRAWER_WIDTH } from "@/theme/drawer";
import type { SidebarProps } from "./types";
import type { RouteTypes } from "@/routes/types";
import { routes } from "@/routes/routes";

const SideBar: React.FC<SidebarProps> = ({
  drawerWidth,
  handleSidebarDrawerClose,
  setDrawerWidth,
  renderActions,
  renderToggleButton,
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
        <Typography
          className="logo-heading"
          color="primary"
          textAlign="center"
          variant="h5"
        >
          [Logo]
        </Typography>
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
          <UserSidebarActions drawerWidth={drawerWidth} />
          {renderToggleButton && (
            <Box className="drawer-toggle-btn">
              <Button
                onClick={toggleDrawer}
                fullWidth
                color="primary"
                variant="contained"
              >
                {drawerWidth === DRAWER_WIDTH.CLOSED ? (
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

export default SideBar;
