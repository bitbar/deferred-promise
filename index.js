'use strict';

/**
 * Deferred Promise
 * @returns {Promise<any>} Promise
 * @constructor
 */
function DeferredPromise() {
  var _resolve, _reject;

  var _this = new Promise(function(resolve, reject) {
    _resolve = resolve;
    _reject = reject;
  });

  _this.resolve = _resolve;
  _this.reject = _reject;

  return _this;
}

module.exports = DeferredPromise;
