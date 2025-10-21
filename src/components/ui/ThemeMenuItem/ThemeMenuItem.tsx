import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useTheme } from "next-themes";
import type { MenuItemsProps } from "../ReusableMenu/types";

export const useThemeMenuItem = () => {
  // themes
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
      default:
        setTheme("system");
        break;
    }
  };

  const handleThemeSwitcher = async () => {
    toggleTheme();
  };

  const themeMenuItem: MenuItemsProps = {
    label: `Theme (${theme})`,
    onClick: handleThemeSwitcher,
    icon:
      theme === "dark" ? (
        <DarkModeOutlined
          fontSize="small"
          className="text-white rounded-full bg-primary"
        />
      ) : (
        <LightModeOutlined
          fontSize="small"
          className="text-white bg-yellow-500 rounded-full"
        />
      ),
  };

  return themeMenuItem;
};
