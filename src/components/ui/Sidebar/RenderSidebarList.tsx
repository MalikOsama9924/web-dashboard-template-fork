import { DRAWER_WIDTH } from "@/theme/drawer";
import { useToggleState } from "@/utils/hooks";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { SideBarListProps } from "./types";

const RenderSidebarList: React.FC<SideBarListProps> = ({
  route,
  drawerWidth,
  handleSidebarDrawerClose,
}) => {
  // router
  const router = useRouter();
  const pathname = usePathname();

  // hooks
  const [subRouteMenu, subRouteMenuToggle] = useToggleState();

  const handleListItemClick = (path: string) => {
    if (route.subRoutes) {
      subRouteMenuToggle();
    } else {
      router.push(path);
      if (handleSidebarDrawerClose) {
        handleSidebarDrawerClose();
      }
    }
  };

  const handleSubListItemClick = (path: string) => {
    router.push(path);

    if (handleSidebarDrawerClose) {
      handleSidebarDrawerClose();
    }
  };

  return (
    <div>
      <ListItemButton
        className="list-item"
        onClick={() => handleListItemClick(route.path)}
        selected={pathname === route.path && !route.subRoutes}
      >
        <Tooltip
          title={drawerWidth === DRAWER_WIDTH.CLOSED ? route.name : ""}
          placement="right"
          arrow
        >
          <ListItemIcon>{<route.icon />}</ListItemIcon>
        </Tooltip>
        {drawerWidth === DRAWER_WIDTH.OPEN && (
          <ListItemText
            primary={route.name}
            secondary={route?.description ?? ""}
          />
        )}
        {route.subRoutes && (
          <IconButton>
            {subRouteMenu ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        )}
      </ListItemButton>
      {route.subRoutes && (
        <Collapse
          in={subRouteMenu}
          timeout="auto"
          unmountOnExit
        >
          <List
            component="div"
            disablePadding
          >
            {route.subRoutes.map((subRoute) => (
              <Link
                key={subRoute.path}
                href={subRoute.path}
              >
                <ListItemButton
                  className="list-item"
                  onClick={() => handleSubListItemClick(subRoute.path)}
                  selected={pathname === subRoute.path}
                  sx={{ pl: 4 }}
                >
                  <Tooltip
                    title={
                      drawerWidth === DRAWER_WIDTH.CLOSED ? subRoute.name : ""
                    }
                    placement="right"
                    arrow
                  >
                    <ListItemIcon>{<subRoute.icon />}</ListItemIcon>
                  </Tooltip>
                  {drawerWidth === DRAWER_WIDTH.OPEN && (
                    <ListItemText
                      primary={subRoute.name}
                      secondary={subRoute?.description ?? ""}
                    />
                  )}
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Collapse>
      )}
    </div>
  );
};

export default RenderSidebarList;
