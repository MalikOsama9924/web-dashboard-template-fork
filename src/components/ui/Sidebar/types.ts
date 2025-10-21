import type { RouteTypes } from "@/routes/types";

export interface SidebarProps {
  drawerWidth: number;
  handleSidebarDrawerClose?: () => void;
  renderActions?: boolean;
  renderToggleButton?: boolean;
  setDrawerWidth?: (_width: number) => void;
}

export interface SideBarListProps {
  route: RouteTypes;
  drawerWidth: number;
  handleSidebarDrawerClose?: () => void;
}

export interface SidebarActionProps {
  drawerWidth: number;
}
