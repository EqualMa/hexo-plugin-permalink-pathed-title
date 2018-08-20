const checkGlobalDependency = require("./dep");

function doPlugin(hexo) {
  if (
    !(
      hexo &&
      config.permalink_pathed_title &&
      config.permalink_pathed_title.use
    )
  ) {
    return;
  }

  const pathFn = checkGlobalDependency("path");
  const util = checkGlobalDependency("hexo-util");
  const slugize = util.slugize;
  const Permalink = util.Permalink;

  hexo.extend.filter.register("after_init", function() {
    const config = hexo.config;

    const getPTitle = post => {
      if (!(post && post.source && post.source.startsWith("_posts/")))
        return null;

      const source = post.source.slice("_posts/".length);

      const sourceWithNoExt = source.substring(
        0,
        source.length - pathFn.extname(source).length
      );

      const link =
        (config.permalink_pathed_title.prefix || "") +
        sourceWithNoExt +
        "/" +
        (config.permalink_pathed_title.postfix || "");

      const paths = link.split("/");

      const slugLink = paths.map(p => slugize(p)).join("/");

      return slugLink;
    };
    const usePTitle = permalink =>
      permalink.rule === ":id/" &&
      config.permalink_pathed_title &&
      config.permalink_pathed_title.use;

    const oldStringify = Permalink.prototype.stringify;
    Permalink.prototype.stringify = function(data) {
      if (usePTitle(this)) {
        const pTitle = getPTitle(data);
        if (pTitle) return pTitle;
      }

      return oldStringify.call(this, data);
    };

    return;
  });
}

module.exports = doPlugin;
