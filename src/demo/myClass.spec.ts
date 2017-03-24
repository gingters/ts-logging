import { expect } from 'chai';
import { MyClass } from './myClass';

describe('MyClass', () => {
	const myClass = new MyClass();

	describe('Hello', () => {

		it('should return `Hello ` + arg', () => {

			const result = myClass.Hello('World');
			expect(result).to.equal('Hello World');
		});
	});
});
