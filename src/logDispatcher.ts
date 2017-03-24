import { Observable, AsyncSubject } from 'rxjs/Rx';

export interface LogEvent {}

export class LogDispatcher {

	private _source$ = new AsyncSubject<LogEvent>();

	public dispatch(logEvent: LogEvent) {
		this._source$.next(logEvent);
	}
}
