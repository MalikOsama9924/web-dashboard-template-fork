import React from "react";
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import type { ReusableMenuProps } from "./types";

const ReusableMenu: React.FC<ReusableMenuProps> = ({
  anchorEl,
  open,
  toggle,
  menuItems = [],
  isDense = false,
  ...props
}) => {
  const handleClose = () => {
    toggle();
  };

  const handleMenuItemClick = (cb: () => void) => {
    cb();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      {...props}
    >
      <MenuList dense={isDense}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={`${item.label}-${index}`}
            disabled={item.disabled}
            onClick={() => handleMenuItemClick(item.onClick)}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText inset={!item.icon}>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ReusableMenu;
