/*
 preventAssignment warning from @rollup/plugin-replace
 https://github.com/jaredpalmer/tsdx/issues/981#issuecomment-789920054
*/

// Not transpiled with TypeScript or Babel, so use plain Es6/Node.js!
const replace = require('@rollup/plugin-replace')

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, opts) {
    config.plugins = config.plugins.map(p =>
      p.name === 'replace'
        ? replace({
            'process.env.NODE_ENV': JSON.stringify(opts.env),
            preventAssignment: true
          })
        : p
    )
    return config // always return a config.
  }
}
