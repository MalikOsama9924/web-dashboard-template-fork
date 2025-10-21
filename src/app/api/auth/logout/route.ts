import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ENV } from "@/config/env";

export async function POST(_request: NextRequest) {
  try {
    const response = NextResponse.json({ success: true });
    response.cookies.delete(ENV.USER_TOKEN_KEY);

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to logout" },
      { status: 500 }
    );
  }
}
