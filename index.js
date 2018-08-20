var doPlugin = require("./lib/doPlugin");

console.group("hexo-plugin-permalink-pathed-title loading");

(function init() {
  if (typeof hexo === "undefined") {
    console.warn("Global hexo not found. This plugin will NOT WORK.");
    return;
  }

  const pluginConfig = hexo.config.permalink_pathed_title;

  if (!pluginConfig) {
    console.warn(
      "plugin config not specified.\n",
      "You can config like the following:\n",
      `
permalink_pathed_title:
  use: true,
  prefix: "post",
  postfix:
      `.trim()
    );

    return;
  }

  doPlugin(hexo);
})();

console.groupEnd();

module.exports = doPlugin;
