const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    domains: ["image.tmdb.org"]
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/movies",
        permanent: true
      }
    ];
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty"
      };
    }

    return config;
  }
};
