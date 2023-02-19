;(function () {
  class Plugin {
    name = 'VariantColorPlugin'
    version = '1.0'

    install(pluginManager) {
      pluginManager.jexl.addFunction('variantColor', f => {
            if(f?.variant?.INFO?.geneImpact?.[0]==='HIGH')     { return 'red' }
            if(f?.variant?.INFO?.geneImpact?.[0]==='MODIFIER') { return 'purple' }
            if(f?.variant?.INFO?.geneImpact?.[0]==='MODERATE') { return 'gold' }
            if(f?.variant?.INFO?.geneImpact?.[0]==='LOW')      { return 'cyan' }
            return 'black';
/*
            if (  typeof f['variant']                          !== 'undefined'
               && typeof f['variant']['INFO']                  !== 'undefined'
               && typeof f['variant']['INFO']['geneImpact']    !== 'undefined'
               && typeof f['variant']['INFO']['geneImpact'][0] !== 'undefined') {
                var cons = f['variant']['INFO']['geneImpact'][0]
             console.log(cons)
                var color = 'black'
                     if(cons == 'HIGH')     {return 'red';}
                else if(cons == 'MODIFIER') {return 'purple';}
                else if(cons == 'MODERATE') {return 'gold';}
                else if(cons == 'LOW')      {return 'cyan';}
             console.log(color)
                return color;
            }
            else {
                return 'black'
            }
*/
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

