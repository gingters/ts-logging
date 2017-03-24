
export enum LogLevel {
	off = 0,
	fatal = 1 << 0,
	error = fatal | 1 << 1,
	warning = error | 1 << 2,
	information = warning | 1 << 3,
	debug = information | 1 << 4,
	trace = debug | 1 << 5,
}

export function checkIsLogLevelInTarget(level: LogLevel, target: LogLevel): boolean {
	return (typeof level === 'undefined') || ((level & target) === target);
}
