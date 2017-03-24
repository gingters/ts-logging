import { LogEventSink } from './logEventSink';
import { LogLevel } from './logLevel';
import { MessageTemplate } from './messageTemplate';
import { LogEvent } from './logEvent';

export class Logger {

	constructor(private sink: LogEventSink) { }

	trace(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.trace, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.trace, null, errorOrMessage, args);
		}
	}

	debug(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.debug, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.debug, null, errorOrMessage, args);
		}
	}

	info(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.information, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.information, null, errorOrMessage, args);
		}
	}

	warn(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.warning, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.warning, null, errorOrMessage, args);
		}
	}

	error(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.error, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.error, null, errorOrMessage, args);
		}
	}

	fatal(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.fatal, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.fatal, null, errorOrMessage, args);
		}
	}

	private log(logLevel: LogLevel, error: Error, message: string, params: any[]) {
		const messageTemplate = new MessageTemplate(message);
		const logEvent = new LogEvent(logLevel, messageTemplate, params, error);
		this.sink.emit(logEvent);
	};

}
