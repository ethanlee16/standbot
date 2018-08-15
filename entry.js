require("babel-register")({
  presets: [["env", {
    targets: {
      node: "current"
    }
  }], "stage-0"],
  plugins: ["transform-runtime", "add-module-exports"]
});
require('./index.js');
