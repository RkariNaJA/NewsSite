import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.next(); //Forwards the incoming request to its actual destination.
}
//Filter the find of request thats trigger the middleware
export const config = {
  matcher: "/news",
};
