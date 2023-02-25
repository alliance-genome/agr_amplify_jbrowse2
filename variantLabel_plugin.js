;(function () {
  class Plugin {
    name = 'VariantLabelPlugin'
    version = '1.0'

    install(pluginManager) {
      pluginManager.jexl.addFunction('variantLabel', f => {

        const symbols = f.variant?.INFO?.allele_symbols || []
     console.log(symbols)
        const symbol  = symbols[0]
     console.log(symbol)
        if  (! (typeof symbol === 'undefined') ) {
            var temp = symbol.replace('<sup>', '<').replace('</sup>','>');
      console.log(temp);
            return temp;
        }

        const name = f.variant?.name || []
        if (! (typeof name === 'undefined') ) {
            var temp = name[0].replace('<sup>', '<').replace('</sup>','>');
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

