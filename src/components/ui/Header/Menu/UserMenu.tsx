import ReusableMenu from "@/components/ui/ReusableMenu/ReusableMenu";
import type { MenuItemsProps } from "@/components/ui/ReusableMenu/types";
import { useThemeMenuItem } from "@/components/ui/ThemeMenuItem/ThemeMenuItem";
import { LogoutOutlined } from "@mui/icons-material";
import type { UserMenuProps } from "../types";
import { useLogout } from "@/modules/auth/hooks";

const UserMenu: React.FC<UserMenuProps> = ({ anchorEl, toggle }) => {
  // theme
  const themeMenuItem = useThemeMenuItem();

  // hooks
  const logout = useLogout();

  const handleMenuClose = () => {
    toggle(null);
  };

  const handleLogout = async () => {
    handleMenuClose();
    logout();
  };

  const menuItems: MenuItemsProps[] = [
    themeMenuItem,
    {
      label: "Logout",
      onClick: handleLogout,
      icon: <LogoutOutlined />,
      disabled: false,
    },
  ];

  return (
    <>
      <ReusableMenu
        isDense
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        toggle={toggle}
        menuItems={menuItems}
        slotProps={{
          paper: {
            sx: {
              width: 150,
              maxWidth: "100%",
            },
          },
        }}
      />
    </>
  );
};

export default UserMenu;
