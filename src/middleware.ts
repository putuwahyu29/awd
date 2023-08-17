import { NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

let locales = ["id", "en"];

// Get the preferred locale, similar to above or using a library
function getLocale(request: any) {
  let headers = { "accept-language": "id,id;q=0.5" };
  let languages = new Negotiator({ headers }).languages();
  let locales = ["id", "en"];
  let defaultLocale = "id";

  let locale = match(languages, locales, defaultLocale); // -> 'en-US'
  return locale;
}

export function middleware(request: {
  nextUrl: { pathname: any };
  url: string | URL | undefined;
}) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!api|_next/static|_next/image|favicon.ico|studio|images).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
