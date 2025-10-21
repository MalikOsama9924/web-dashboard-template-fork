import type { RouteTypes } from "./types";
import {
  BarChart,
  Dashboard,
  Message,
  Notifications,
  Person,
} from "@mui/icons-material";

export const routes: RouteTypes[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    // description: "Class and studio",
    icon: Dashboard,
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "/dashboard/users",
    name: "Users",
    icon: Person,
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "#",
    name: "Messages",
    icon: Message,
    sidebar: true,
    isPrivate: true,
    subRoutes: [
      {
        path: "/dashboard/notifications/overview",
        name: "Overview",
        icon: BarChart,
      },
      {
        path: "/dashboard/notifications",
        name: "Notifications",
        icon: Notifications,
      },
    ],
  },
];
