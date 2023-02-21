;(function () {
  class Plugin {
    name = 'HTVariantColorPlugin'
    version = '1.0'

    install(pluginManager) {
      pluginManager.jexl.addFunction('htVariantColor', f => {
            var cons = [];
            if (   typeof f !== 'undefined'
                && typeof f.variant !=='undefined'
                && typeof f.variant.INFO !== 'undefined'
                && typeof f.variant.INFO.CSQ !== 'undefined') {
                var csq = f.variant.INFO.CSQ;
                if (csq === 'undefined') {return 'black'}
                if (!Array.isArray(csq)) {return 'green'}
                
                csq.forEach(function(line) {
                    if (typeof line === 'undefined') {return 'pink'}
                    console.log(line)
                    var tmp = line.split('|')[2]
                    if (typeof tmp === 'undefined') {return 'lightgreen'}
                    console.log(tmp)
                    cons.push(tmp)
                    console.log(cons)
                })
            } else {return 'black'}
            console.log(cons); 
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
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginHTVariantColorPlugin =
    {
      default: Plugin,
    }
})()

