;(function () {
  class Plugin {
    name = 'HexJexlPlugin'
    version = '1.0'

    install(pluginManager) {
      pluginManager.jexl.addFunction('hex', (num1) => {
         return num1.toString(16);   
      })
    }

    configure(pluginManager) {}
  }

  // the plugin will be included in both the main thread and web worker, so
  // install plugin to either window or self (webworker global scope)
  ;(typeof self !== 'undefined' ? self : window).JBrowsePluginHexJexlPlugin =
    {
      default: Plugin,
    }
})()





//const Plugin = JBrowseExports['@jbrowse/core/Plugin']

//export default class HexJexlPlugin extends Plugin {
//  name = 'HexJexlPlugin'

//  install(pluginManager) {
//    pluginManager.jexl.addFunction('hex', (num1) => {
//      return num1.toString(16);
//    })
//  }
//}
