import { expect } from 'chai';

import { Logger } from './logger';
import { LogEvent } from './logEvent';
import { MessageTemplate } from './messageTemplate';
import { LogLevel } from './logLevel';
import { LogEventSink } from './logEventSink';

class TestSink implements LogEventSink {

	public emittedEvent: LogEvent = void 0;

	public emit(logEvent: LogEvent): void {
		this.emittedEvent = logEvent;
	}
}

describe('Logger', () => {

	describe('trace', () => {

		describe('called with an Errror', () => {

			it('should create the correct event', () => {
				const sink = new TestSink();
				const logger = new Logger(sink);

				logger.trace(new Error('Test Error'), 'This is the message template string');

				const subject = sink.emittedEvent;
				expect(subject).not.to.be.undefined;
				expect(subject.logLevel).to.be.equal(LogLevel.trace);

				expect(subject.messageTemplate).not.to.be.undefined;
				expect(subject.messageTemplate.rawMessage).not.to.be.undefined;
				expect(subject.messageTemplate.rawMessage).to.be.equal('This is the message template string');

				expect(subject.timestamp).not.to.be.undefined;
				expect(subject.error).not.to.be.undefined;
				expect(subject.error.message).not.to.be.undefined;
				expect(subject.error.message).to.be.equal('Test Error');
			});

		})

	})

});

