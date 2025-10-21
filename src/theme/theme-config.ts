import { Archivo } from "next/font/google";
import type { ToasterProps } from "sonner";

export const colorVariables = {
  primary: "#4338ca",
  secondary: "#6366f1",
  tableHeadColor: "#1f2937",
};

export const projectName = "Web Template";

// fonts
export const fontTheme = Archivo({
  weight: ["300", "400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  style: ["normal"],
});

// toast
export const sonner: ToasterProps = {
  expand: false,
  richColors: true,
  visibleToasts: 3,
  position: "bottom-right",
  closeButton: true,

  toastOptions: {
    duration: 4000,
  },
};
