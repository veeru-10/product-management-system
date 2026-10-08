import { NextRequest, NextResponse } from "next/server";
import { users } from "./data/users";

export default function proxy(request : NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value
  const refreshToken = request.cookies.get('refreshToken')?.value

  if(!accessToken || !refreshToken) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    )
  }

  const authenticatedUser = users.find(user => user.accessToken === accessToken && user.refreshToken === refreshToken)

  if(!authenticatedUser) {
    return NextResponse.redirect(
      new URL("/login", request.url)
    )
  }
  return NextResponse.next()
}

export const config = {
  matcher : ['/dashboard/:path*', '/about/:path*', '/cart/:path*'] //run the middleware for the dashboard or any routes under dashboard
}