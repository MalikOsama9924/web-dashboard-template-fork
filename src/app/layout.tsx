import "./globals.scss";
import "@/styles/sidebar.scss";
import "@/styles/variables.scss";
import "@/styles/text.scss";

import { projectName, fontTheme } from "@/theme/theme-config";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import RootProvider from "@/components/Providers/RootProvider";
import type { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={fontTheme.className}
    >
      <head>
        <title>{projectName}</title>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
        <meta
          name="description"
          content="NextJs web app"
        />
      </head>
      <body>
        <AppRouterCacheProvider
          options={{
            key: "css",
          }}
        >
          <RootProvider>{children}</RootProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
