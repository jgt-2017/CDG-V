const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssLoaderOptions: {
    importLoaders: 2,
  },
});

module.exports = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
