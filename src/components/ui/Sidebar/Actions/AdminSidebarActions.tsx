import { Logout, Settings } from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import type { SidebarActionProps } from "../types";
import { DRAWER_WIDTH } from "@/theme/drawer";
import type { RouteTypes } from "@/routes/types";
import { useLogout } from "@/modules/auth/hooks";

export const routes: RouteTypes[] = [
  {
    path: "/dashboard/settings",
    name: "Settings",
    icon: <Settings />,
  },
];

const AdminSidebarActions: React.FC<SidebarActionProps> = ({ drawerWidth }) => {
  // router
  const pathname = usePathname();

  // hooks
  const logout = useLogout();

  const handleLogout = async () => {
    logout();
  };

  return (
    <div className="links-box">
      <List className="navLink">
        {routes.map((route) => (
          <Link
            href={route.path}
            key={route.path}
          >
            <ListItemButton
              className="list-item"
              key={route.path}
              selected={pathname === route.path}
            >
              <Tooltip
                title={drawerWidth === DRAWER_WIDTH.CLOSED ? route.name : ""}
                placement="right"
                arrow
              >
                <ListItemIcon>{route.icon}</ListItemIcon>
              </Tooltip>
              {drawerWidth === DRAWER_WIDTH.OPEN && (
                <ListItemText
                  primary={route.name}
                  secondary={route?.description ?? ""}
                />
              )}
            </ListItemButton>
          </Link>
        ))}

        <ListItemButton
          className="list-item"
          onClick={handleLogout}
        >
          <Tooltip
            title={drawerWidth === DRAWER_WIDTH.CLOSED ? "Logout" : ""}
            placement="right"
            arrow
          >
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
          </Tooltip>
          {drawerWidth === DRAWER_WIDTH.OPEN && (
            <ListItemText
              primary="Logout"
              secondary=""
            />
          )}
        </ListItemButton>
      </List>
    </div>
  );
};

export default AdminSidebarActions;
