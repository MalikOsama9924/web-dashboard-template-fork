"use client";

import styles from "./styles.module.scss";
import { Avatar, Box, Drawer } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import UserSideBar from "../Sidebar/UserSideBar";
import { projectName } from "@/theme/theme-config";
import { useReduxUser } from "@/utils/hooks";
import DrawerToggle from "./DrawerToggle";
import UserMenu from "./Menu/UserMenu";

const UserHeader = ({ drawerWidth }: { drawerWidth: number }) => {
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
    <Box className={styles["header-container"]}>
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
        <div className="flex gap-3 items-center">
          <Avatar
            src="/images/user.png"
            onClick={(e) => handleOpenMenu(e.currentTarget)}
            className={styles["header-avatar"]}
          />
        </div>
      )}

      {/* menu */}
      <UserMenu
        anchorEl={anchorEl}
        toggle={setAnchorEl}
      />

      {/* dialog */}
      <Drawer
        open={sidebarMenu}
        variant="temporary"
        onClose={handleSidebarDrawerClose}
      >
        <UserSideBar
          handleSidebarDrawerClose={handleSidebarDrawerClose}
          drawerWidth={drawerWidth}
          renderActions
        />
      </Drawer>
    </Box>
  );
};

export default UserHeader;
