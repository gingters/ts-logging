import { LogEvent, LogEventSink } from '../ts-logging';

export class ConsoleSink implements LogEventSink {


	public emit(logEvent: LogEvent) {

		console.log('ConsoleSink received log event...');

	}
}
