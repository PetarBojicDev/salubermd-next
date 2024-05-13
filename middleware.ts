import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en_US", "it_IT"],
  defaultLocale: "en_US",
});

export const config = {
  matcher: ["/", "/(en_US|it_IT)/:path*","/:path/(en_US|it_IT)"],
};