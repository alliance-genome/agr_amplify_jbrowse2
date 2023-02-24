;(function () {
  class Plugin {
    name = 'VariantLabelPlugin'
    version = '1.0'

    install(pluginManager) {
      pluginManager.jexl.addFunction('variantLabel', f => {

        const symbols = f.variant?.INFO?.allele_symbols || []
        const symbol  = symbols[0]
        if  (! (typeof symbol === 'undefined') ) {
            var temp = symbol.replace('<sup>', '<').replace('</sup>','>');
            return temp;
        }

        const name = f.variant?.name || []
        if (! (typeof name === 'undefined') ) {
            var temp = name.replace('<sup>', '<').replace('</sup>','>');
            return temp;
        }
        return;
      
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

