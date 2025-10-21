export interface UserMenuProps {
  anchorEl: HTMLElement | null | undefined;
  toggle: (_data?: null | HTMLElement) => void;
}

export interface AdminHeaderProps {
  drawerWidth: number;
}

export interface AdminMenuProps {
  anchorEl: HTMLElement | null | undefined;
  toggle: (_data?: null | HTMLElement) => void;
}

export interface DrawerToggleProps {
  handleSidebarDrawerOpen: () => void;
}
