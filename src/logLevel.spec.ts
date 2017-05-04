import { expect } from 'chai';

import { LogLevel, isAllowed } from './logLevel';

describe('logLevel', () => {

	describe('enum', () => {

		it('should have state "off"', () => {
			expect(LogLevel.off).not.to.be.undefined;
			expect(LogLevel.off).to.equal(0);
		});

		it('should have state "critical"', () => {
			expect(LogLevel.critical).not.to.be.undefined;
			expect(LogLevel.critical).to.equal(1);
		});

		it('should have state "error"', () => {
			expect(LogLevel.error).not.to.be.undefined;
			expect(LogLevel.error).to.equal(2);
		});

		it('should have state "warning"', () => {
			expect(LogLevel.warning).not.to.be.undefined;
			expect(LogLevel.warning).to.equal(3);
		});

		it('should have state "info"', () => {
			expect(LogLevel.info).not.to.be.undefined;
			expect(LogLevel.info).to.equal(4);
		});

		it('should have state "debug"', () => {
			expect(LogLevel.debug).not.to.be.undefined;
			expect(LogLevel.debug).to.equal(5);
		});

		it('should have state "trace"', () => {
			expect(LogLevel.trace).not.to.be.undefined;
			expect(LogLevel.trace).to.equal(6);
		});
	}); 

	describe('isAllowed', () => {

		it('should be true on level undefined', () => {
			const result = isAllowed(void 0, void 0);
			expect(result).not.to.be.undefined;
			expect(result).to.be.true;
		});

		it('should be false on level null', () => {
			const result = isAllowed(null, void 0);
			expect(result).not.to.be.undefined;
			expect(result).to.be.false;
		});

		it('should be false on filter undefined', () => {
			const result = isAllowed(LogLevel.off, void 0);
			expect(result).not.to.be.undefined;
			expect(result).to.be.false;
		});

		it('should be false on filter null', () => {
			const result = isAllowed(LogLevel.off, null);
			expect(result).not.to.be.undefined;
			expect(result).to.be.false;
		});

		it('should be true on level and filter "critical"', () => {
			const result = isAllowed(LogLevel.critical, LogLevel.critical);
			expect(result).not.to.be.undefined;
			expect(result).to.be.true;
		});

		it('should be true on level and filter "error"', () => {
			const result = isAllowed(LogLevel.error, LogLevel.error);
			expect(result).not.to.be.undefined;
			expect(result).to.be.true;
		});

		it('should be true on level and filter "warning"', () => {
			const result = isAllowed(LogLevel.warning, LogLevel.warning);
			expect(result).not.to.be.undefined;
			expect(result).to.be.true;
		});

		it('should be true on level and filter "info"', () => {
			const result = isAllowed(LogLevel.info, LogLevel.info);
			expect(result).not.to.be.undefined;
			expect(result).to.be.true;
		});

		it('should be true on level and filter "debug"', () => {
			const result = isAllowed(LogLevel.debug, LogLevel.debug);
			expect(result).not.to.be.undefined;
			expect(result).to.be.true;
		});

		it('should be true on level and filter "trace"', () => {
			const result = isAllowed(LogLevel.trace, LogLevel.trace);
			expect(result).not.to.be.undefined;
			expect(result).to.be.true;
		});

		it('should be false on all levels and filter "off"', () => {
			const test = (lvl) => { return isAllowed(lvl, LogLevel.off); };

			expect(test(LogLevel.critical)).to.be.false;
			expect(test(LogLevel.error)).to.be.false;
			expect(test(LogLevel.warning)).to.be.false;
			expect(test(LogLevel.info)).to.be.false;
			expect(test(LogLevel.debug)).to.be.false;
			expect(test(LogLevel.trace)).to.be.false;
		});

		it('should only allow "critical" on filter "critical"', () => {
			const test = (lvl) => { return isAllowed(lvl, LogLevel.critical); };

			expect(test(LogLevel.critical)).to.be.true;
			expect(test(LogLevel.error)).to.be.false;
			expect(test(LogLevel.warning)).to.be.false;
			expect(test(LogLevel.info)).to.be.false;
			expect(test(LogLevel.debug)).to.be.false;
			expect(test(LogLevel.trace)).to.be.false;
		});

		it('should only allow "critical" and "error" on filter "error"', () => {
			const test = (lvl) => { return isAllowed(lvl, LogLevel.error); };

			expect(test(LogLevel.critical)).to.be.true;
			expect(test(LogLevel.error)).to.be.true;
			expect(test(LogLevel.warning)).to.be.false;
			expect(test(LogLevel.info)).to.be.false;
			expect(test(LogLevel.debug)).to.be.false;
			expect(test(LogLevel.trace)).to.be.false;
		});

		
		it('should only allow "critical" to "warning" on level "filter"', () => {
			const test = (lvl) => { return isAllowed(lvl, LogLevel.warning); };

			expect(test(LogLevel.critical)).to.be.true;
			expect(test(LogLevel.error)).to.be.true;
			expect(test(LogLevel.warning)).to.be.true;
			expect(test(LogLevel.info)).to.be.false;
			expect(test(LogLevel.debug)).to.be.false;
			expect(test(LogLevel.trace)).to.be.false;
		});

		it('should only allow "critical" to "info" on filter "info"', () => {
			const test = (lvl) => { return isAllowed(lvl, LogLevel.info); };

			expect(test(LogLevel.critical)).to.be.true;
			expect(test(LogLevel.error)).to.be.true;
			expect(test(LogLevel.warning)).to.be.true;
			expect(test(LogLevel.info)).to.be.true;
			expect(test(LogLevel.debug)).to.be.false;
			expect(test(LogLevel.trace)).to.be.false;
		});

		it('should only allow "critical" to "debug" on filter "debug"', () => {
			const test = (lvl) => { return isAllowed(lvl, LogLevel.debug); };

			expect(test(LogLevel.critical)).to.be.true;
			expect(test(LogLevel.error)).to.be.true;
			expect(test(LogLevel.warning)).to.be.true;
			expect(test(LogLevel.info)).to.be.true;
			expect(test(LogLevel.debug)).to.be.true;
			expect(test(LogLevel.trace)).to.be.false;
		});

		it('should only allow "critical" to "trace" on filter "trace"', () => {
			const test = (lvl) => { return isAllowed(lvl, LogLevel.trace); };

			expect(test(LogLevel.critical)).to.be.true;
			expect(test(LogLevel.error)).to.be.true;
			expect(test(LogLevel.warning)).to.be.true;
			expect(test(LogLevel.info)).to.be.true;
			expect(test(LogLevel.debug)).to.be.true;
			expect(test(LogLevel.trace)).to.be.true;
		});

		it('should only correctly filter multiple levels on filter array', () => {
			const test = (lvl) => { return isAllowed(lvl, [LogLevel.error, LogLevel.info, LogLevel.trace]); };

			expect(test(LogLevel.critical)).to.be.false;
			expect(test(LogLevel.error)).to.be.true;
			expect(test(LogLevel.warning)).to.be.false;
			expect(test(LogLevel.info)).to.be.true;
			expect(test(LogLevel.debug)).to.be.false;
			expect(test(LogLevel.trace)).to.be.true;
		});

	});
});
