(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.IsNativelySupported = factory());
}(this, function () { 'use strict';

	class IsNativelySupported {
		constructor(...features) {
			console.log(features);
			IsNativelySupported.features = features;
		}

		static isNativelySupported() {
			return IsNativelySupported.features.map((feature) => feature in window).some((feature) => feature)
		}
	}

	return IsNativelySupported;

}));
