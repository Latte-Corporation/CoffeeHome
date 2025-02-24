import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //if on mobile, redirect to /#contact
  if (request.headers.get("user-agent")?.includes("Mobile")) {
    return NextResponse.redirect(new URL("/#contact", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/contact",
};
