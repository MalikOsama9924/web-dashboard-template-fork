import styles from "./styles.module.scss";

import { Menu } from "@mui/icons-material";
import { useReduxUser } from "@/utils/hooks";
import { IconButton, Tooltip } from "@mui/material";
import type { DrawerToggleProps } from "./types";

const DrawerToggle: React.FC<DrawerToggleProps> = ({
  handleSidebarDrawerOpen,
}) => {
  // redux
  const userRedux = useReduxUser();

  return userRedux ? (
    <Tooltip
      title="Menu"
      arrow={true}
      placement="right"
    >
      <IconButton
        className={styles["header-sidebar-btn"]}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
        onClick={handleSidebarDrawerOpen}
      >
        <Menu />
      </IconButton>
    </Tooltip>
  ) : (
    <></>
  );
};

export default DrawerToggle;
