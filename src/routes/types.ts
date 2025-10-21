export type RouteTypes = {
  path: string;
  name: string;
  description?: string;
  icon?: any;
  sidebar?: boolean;
  isPublic?: boolean;
  isPrivate?: boolean;
  isHybrid?: boolean;
  subRoutes?: RouteTypes[];
};
