import { LogEvent } from './logEvent';

export interface LogEventSink {
	emit(LogEvent): void;
}
