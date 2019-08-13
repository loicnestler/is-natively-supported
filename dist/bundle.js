define(function () { 'use strict';

	class IsNativelySupported {
		constructor(...features) {
			console.log(features);
			IsNativelySupported.features = features;
		}

		static isNativelySupported() {
			return IsNativelySupported.features.map((feature) => feature in window).some((feature) => feature)
		}
	}

	module.exports = IsNativelySupported;

});
