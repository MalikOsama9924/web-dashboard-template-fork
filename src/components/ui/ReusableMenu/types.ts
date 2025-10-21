import type { MenuProps } from "@mui/material";

export type MenuItemsProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
};

export interface ReusableMenuProps extends MenuProps {
  anchorEl: HTMLElement | null | undefined;
  open: boolean;
  toggle: (_data?: null | HTMLElement) => void;
  isDense?: boolean;
  menuItems: MenuItemsProps[];
}
