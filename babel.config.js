module.exports = {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: ["last 2 versions", "ie >= 9"]
          }
        }
      ],
      "@babel/preset-react"
    ],
    plugins: ["@babel/plugin-proposal-class-properties"]
  };
  