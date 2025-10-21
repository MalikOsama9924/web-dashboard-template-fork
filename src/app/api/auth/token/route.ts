import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ENV } from "@/config/env";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(ENV.USER_TOKEN_KEY)?.value || "";
  return NextResponse.json({ token });
}
