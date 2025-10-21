import { useTheme } from "next-themes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material/styles";
import { colorVariables, fontTheme } from "@/theme/theme-config";

// mui themes
const primaryColor = colorVariables.primary;
const secondaryColor = colorVariables.secondary;
const tableHeadColor = colorVariables.tableHeadColor;

const createMuiTheme = (themeMode: string) => {
  const newMode = themeMode === "system" ? "light" : (themeMode as PaletteMode);

  return createTheme({
    typography: {
      fontFamily: fontTheme.style.fontFamily,
    },
    palette: {
      mode: newMode,
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: "initial",
          },
          contained: {
            color: "white",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: tableHeadColor,
          },
        },
      },
    },
  });
};

const MuiThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // next theme
  const { theme } = useTheme();
  const muiTheme = createMuiTheme(theme || "light");

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
