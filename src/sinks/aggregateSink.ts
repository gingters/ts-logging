import { LogEvent, LogEventSink } from '../ts-logging';

export class AggregateSink implements LogEventSink {

	private _sinks: LogEventSink[] = [];

	constructor(sinks: LogEventSink[]) {
		this._sinks = this._sinks.concat(sinks);
	}

	public addSink(sink: LogEventSink) {
		this._sinks.push(sink);
	}

	public emit(logEvent: LogEvent) {
		this._sinks.forEach(s => s.emit(logEvent));
	}
}
