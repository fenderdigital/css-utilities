module.exports = (ctx) => ({
  plugins: {
    "postcss-import": {},
    "postcss-cssnext": {
      "warnForDuplicates": false
    },
    "css-mqpacker": {
      "sort": true
    },
    "perfectionist": {
      cascade: true,
      indentSize: 2
    },
    "cssnano": ctx.env === "production" ? { "preset": "default", "safe": true } : false,
    "postcss-discard-comments": ctx.env === "production" ? {} : false
  },
  map: ctx.env === "production" ? { inline: false } : false
})
