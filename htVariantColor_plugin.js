;(function () {
  class Plugin {
    name = 'HTVariantColorPlugin'
    version = '1.0'

    install(pluginManager) {
      pluginManager.jexl.addFunction('htVariantColor', f => {
            var cons = []
            if(f?.variant?.INFO?.CSQ?)     {
                f.variant.INFO.CSQ.foreach(function(line) {
                    cons.push(line.split('|')[2])
                })
            }
            
            cons.foreach(function(item) {
                if (item==='HIGH')     {return 'red';} 
            }) 

            cons.foreach(function(item) {
                if (item==='MODIFIER') {return 'purple';}
            }) 

            cons.foreach(function(item) {
                if (item==='MODERATE') {return 'gold';}
            })

            cons.foreach(function(item) {
                if (item==='LOW')      {return 'cyan';}
            })

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

