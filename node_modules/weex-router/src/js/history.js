var history = require('history')

var __Weex_Router_History;

var History = {
  getHistoryInstance: function () {
    return __Weex_Router_History.history
  },

  getBasename: function () {
    return __Weex_Router_History.basename
  },

  getUrl: function () {
    return __Weex_Router_History.url
  },

  getNavigator: function () {
    return __Weex_Router_History.navigator
  },

  createHistory: function (basename, url, navigator) {
    if (!__Weex_Router_History) {
      var historyInstance = history.createMemoryHistory({
        basename: basename || '',
        forceRefresh: false
      })

      __Weex_Router_History = {
        history:historyInstance,
        basename:basename,
        navigator:navigator,
        url: url
      }
    }
    return __Weex_Router_History.history
  }
}

module.exports = History
