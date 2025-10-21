import {
  Article,
  Home,
  Group,
  AccountCircle,
  Settings,
  Info,
} from "@mui/icons-material";
import type { RouteTypes } from "./types";

export const routes: RouteTypes[] = [
  {
    path: "/",
    name: "Home",
    icon: Home,
    sidebar: false,
    isPrivate: true,
  },
  {
    path: "/users",
    name: "Users",
    icon: Group,
    sidebar: true,
    isPrivate: true,
  },
  {
    path: "#",
    name: "Profile",
    icon: AccountCircle,
    sidebar: true,
    isPrivate: true,
    subRoutes: [
      {
        path: "/profile/information",
        name: "Information",
        icon: Info,
      },
      {
        path: "/profile/settings",
        name: "Settings",
        icon: Settings,
      },
    ],
  },
  {
    path: "/about-us",
    name: "About",
    icon: Article,
    sidebar: true,
    isHybrid: true,
  },
  {
    path: "/auth/login",
    name: "Login",
    isPublic: true,
  },
];

// isPublic => only accessible when user signed-out
// isPrivate => only accessible when user signed-in
// isHybrid => always accessible

export const Public_Routes = routes
  .filter((item) => item.isPublic)
  .map((item) => item.path);
export const Private_Routes = routes
  .filter((item) => item.isPrivate)
  .map((item) => item.path);
export const Hybrid_Routes = routes
  .filter((item) => item.isHybrid)
  .map((item) => item.path);
export const Access_Route = "/";
export const Login_Route = "/auth/login";
