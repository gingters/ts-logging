
export enum LogLevel {
	off = 0,
	critical = 1,
	error = 2,
	warning = 3,
	info = 4,
	debug = 5,
	trace = 6,
}

export function isAllowed(level: LogLevel, filter: LogLevel | LogLevel[]): boolean {
	if (filter === LogLevel.off || filter === null)
		return false;

	if (typeof level === 'undefined')
		return true;

	if (Array.isArray(filter)) {
		return filter.indexOf(level) > -1;
	} else {
		return level <= filter;
	}
}
