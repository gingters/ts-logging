import { LogEventSink } from './logEventSink';
import { LogLevel } from './logLevel';
import { MessageRenderer } from './messageRenderer';
import { LogEvent } from './logEvent';

export class Logger {

	constructor(private sink: LogEventSink) { }

	public trace(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.trace, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.trace, null, errorOrMessage, args);
		}
	}

	public debug(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.debug, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.debug, null, errorOrMessage, args);
		}
	}

	public info(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.info, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.info, null, errorOrMessage, args);
		}
	}

	public warn(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.warning, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.warning, null, errorOrMessage, args);
		}
	}

	public error(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.error, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.error, null, errorOrMessage, args);
		}
	}

	public critical(errorOrMessage: Error | string, ...args: any[]) {
		if (errorOrMessage instanceof Error) {
			this.log(LogLevel.critical, errorOrMessage, args[0], args.slice(1));
		} else {
			this.log(LogLevel.critical, null, errorOrMessage, args);
		}
	}

	private log(logLevel: LogLevel, error: Error, message: string, params: any[]) {
		try {
			const messageTemplate = new MessageRenderer(message);
			
			const logEvent = new LogEvent(logLevel, messageTemplate, params, error);
			this.sink.emit(logEvent);
		} catch(e) {
			throw e;
		}
	};

}
