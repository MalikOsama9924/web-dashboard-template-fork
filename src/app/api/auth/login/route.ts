import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ENV } from "@/config/env";
import userService from "@/modules/user/services";
import authService from "@/modules/auth/services";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, rememberMe } = body;

    // Call the login service
    const res = await authService.login(email, password);
    const { token } = res;

    // Get user profile
    const userData = await userService.getUserProfile(token);

    // Create the response
    const response = NextResponse.json({
      success: true,
      userData,
    });

    // Set the cookie
    response.cookies.set(ENV.USER_TOKEN_KEY, token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
      maxAge: rememberMe ? 7 * 24 * 60 * 60 : 24 * 60 * 60, // 7 days if remember me, 1 day if not
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Invalid credentials" },
      { status: 401 }
    );
  }
}
