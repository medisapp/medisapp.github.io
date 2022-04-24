const isProd = process.env.NODE_ENV === "production";

module.exports = {
  plugins: {
    "posthtml-include": {},
    "posthtml-shorten": {
      shortener: {
        process: async (url) => {
          return isProd ? url.replace(/\.html$/, "") : url;
        },
      },
      tag: ["a"],
      attribute: ["href"],
    },
  },
};
