"use client";

import styles from "./styles.module.scss";

import { Avatar, Box, Drawer } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { projectName } from "@/theme/theme-config";
import { useReduxUser } from "@/utils/hooks";
import AdminSidebar from "../Sidebar/AdminSidebar";
import DrawerToggle from "./DrawerToggle";

import type { AdminHeaderProps } from "./types";
import AdminMenu from "./Menu/AdminMenu";

const AdminHeader: React.FC<AdminHeaderProps> = ({ drawerWidth }) => {
  // state
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null | undefined>(
    null
  );

  // redux
  const userRedux = useReduxUser();

  const handleSidebarDrawerOpen = () => {
    setSidebarMenu(true);
  };

  const handleSidebarDrawerClose = () => {
    setSidebarMenu(false);
  };

  const handleOpenMenu = (element: HTMLElement) => {
    setAnchorEl(element);
  };

  return (
    <Box
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      className={`${styles["header-container"]}`}
    >
      <Box className={styles["header-title-btn"]}>
        <DrawerToggle handleSidebarDrawerOpen={handleSidebarDrawerOpen} />
        <Link href="/">
          <p
            className={`${styles["header-title"]} text-sm md:text-lg font-semibold`}
          >
            {projectName}
          </p>
        </Link>
      </Box>
      {userRedux && (
        <div className="flex items-center justify-center gap-4">
          <div className={styles["link-box"]}>
            <span className={styles["link"]}>Link</span>
          </div>
          <Avatar
            src="/images/user.png"
            onClick={(e) => handleOpenMenu(e.currentTarget)}
            className={styles["header-avatar"]}
          />
        </div>
      )}

      {/* menu */}
      <AdminMenu
        anchorEl={anchorEl}
        toggle={setAnchorEl}
      />

      {/* dialog */}
      <Drawer
        open={sidebarMenu}
        variant="temporary"
        onClose={handleSidebarDrawerClose}
      >
        <AdminSidebar
          handleSidebarDrawerClose={handleSidebarDrawerClose}
          drawerWidth={drawerWidth}
          renderActions
        />
      </Drawer>
    </Box>
  );
};

export default AdminHeader;
