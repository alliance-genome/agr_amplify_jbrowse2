;(function () {
  function stripQuotes(str) {
    if (typeof str === 'string' && str.length >= 2 && str.startsWith('"') && str.endsWith('"')) {
        return str.slice(1, -1)
    }
    return str
  }

  class Plugin {
    name = 'VariantLabelPlugin'
    version = '1.0'

    install(pluginManager) {
      pluginManager.jexl.addFunction('variantLabel', f => {

        const symbols = f.get('INFO').allele_symbols
        if (! (typeof symbols=== 'undefined') ) {
            var temp = stripQuotes(symbols[0]).replace('<sup>', '<').replace('</sup>','>');
            return temp;
        }

        const name = stripQuotes(f.get('name'))
        if (! (typeof name === 'undefined') ) {
            var temp = name.replace('<sup>', '<').replace('</sup>','>');
            return temp;
        }
        return 'no name';
      
      })
    }

    configure(pluginManager) {}
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginVariantLabelPlugin =
    {
      default: Plugin,
    }
})()

