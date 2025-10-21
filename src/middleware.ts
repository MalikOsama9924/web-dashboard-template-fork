import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const { NEXT_PUBLIC_USER_TOKEN_KEY } = process.env;

// Note: add paths in matcher to run middleware only on these paths

// Route configuration
const ROUTES = {
  PUBLIC_URLS: ["/auth/login", "/auth/signup"],
  HYBRID_URLS: ["/about-us"],
  LOGIN_URL: "/auth/login",
};

const staticFileExtensions = [
  ".ico",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".webp",
  ".css",
  ".js",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".pdf",
  ".txt",
  ".xml",
  ".json",
];

export default async function validateAuthentication(req: NextRequest) {
  const token = req.cookies.get(NEXT_PUBLIC_USER_TOKEN_KEY || "")?.value;

  const { pathname } = req.nextUrl;

  // Skip middleware for static files
  if (staticFileExtensions.some((ext) => pathname.endsWith(ext))) {
    return NextResponse.next();
  }

  NextResponse.next().headers.set(
    "Cache-Control",
    "no-cache, no-store, must-revalidate"
  );

  // if user requested hybrid routes
  if (ROUTES.HYBRID_URLS.some((url) => pathname.startsWith(url))) {
    return NextResponse.next();
  }

  // if not logged-in and requested protected route
  if (!token && !ROUTES.PUBLIC_URLS.some((url) => pathname.startsWith(url))) {
    return redirectTo(req, ROUTES.LOGIN_URL, 302);
  }

  // if logged-in and requested public route
  if (token && ROUTES.PUBLIC_URLS.some((url) => pathname.startsWith(url))) {
    return redirectTo(req, "/", 302);
  }

  return NextResponse.next();
}

/**
 * Redirects to url
 * @param {import("next/server").NextRequest} req
 * @param {string} url
 * @param {number} status status code
 */
function redirectTo(req: NextRequest, url: string, status: number) {
  req.nextUrl.pathname = url;
  return NextResponse.redirect(req.nextUrl, {
    status,
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
