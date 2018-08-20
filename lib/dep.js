function checkGlobalDependency(modulePath) {
  try {
    const mod = require(modulePath);
    return mod;
  } catch (err) {
    console.error(
      err.message + "\n",
      `hexo-plugin-permalink-pathed-title needs dependency '${modulePath}'.\n`,
      `Running 'npm install ${modulePath} -S' may solve this error`
    );
    return undefined;
  }
}

module.exports = checkGlobalDependency;
