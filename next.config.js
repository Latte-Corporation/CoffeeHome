/** @type {import('next').NextConfig} */
module.exports = {
  redirects() {
    return [
      process.env.MAINTENANCE_MODE === "1"
        ? {
            source: "/:path((?!maintenance.html$).*)", // Exclut maintenance.html sans lookahead
            destination: "/maintenance.html",
            permanent: false,
          }
        : {
            source: "/maintenance.html",
            destination: "/",
            permanent: false,
          },
    ].filter(Boolean);
  },
  output: "standalone",
};
