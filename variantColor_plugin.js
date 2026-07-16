;(function () {
  class Plugin {
    name = 'VariantColorPlugin'
    version = '1.0'

    install(pluginManager) {
      pluginManager.jexl.addFunction('variantColor', f => {
            console.log(f)
            const geneImpact = f.get('INFO')?.geneImpact
            if(geneImpact?.[0]==='HIGH')     { return 'red' }
            if(geneImpact?.[0]==='MODIFIER') { return 'purple' }
            if(geneImpact?.[0]==='MODERATE') { return 'gold' }
            if(geneImpact?.[0]==='LOW')      { return 'cyan' }
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

