;(function () {
  class Plugin {
    name = 'VariantColorPlugin'
    version = '1.0'

    install(pluginManager) {
      pluginManager.jexl.addFunction('variantColor', f => {
            const geneImpact = f.get('INFO')?.geneImpact?.[0]
            if(geneImpact?.includes('HIGH'))     { return 'red' }
            if(geneImpact?.includes('MODIFIER')) { return 'purple' }
            if(geneImpact?.includes('MODERATE')) { return 'gold' }
            if(geneImpact?.includes('LOW'))      { return 'cyan' }
            return 'black';
      })
    }

    configure(pluginManager) {}
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginVariantColorPlugin =
    {
      default: Plugin,
    }
})()

