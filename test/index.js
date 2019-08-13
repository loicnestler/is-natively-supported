const IsNativelySupported = require('../lib/')

global.window = {
	test1 : 'i exist :)',
	test2 : false
}

class Test extends IsNativelySupported {
	constructor() {
		super('test3')
		console.log(Test.isNativelySupported())
	}
}

const t1 = new Test()
