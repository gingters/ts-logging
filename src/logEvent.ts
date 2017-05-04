import { LogLevel } from './logLevel';
import { MessageRenderer } from './messageRenderer';

export class LogEvent {
	
	public timestamp: Date = new Date();

	constructor(public logLevel: LogLevel, public renderer: MessageRenderer, public args: any[] = void 0, public error: Error = void 0) {
		console.log(`LogEvent.ctor(${logLevel}, ${JSON.stringify(renderer)}, ${JSON.stringify(args)}, ${JSON.stringify(error)})`);
		this.timestamp = new Date();
	}
	
}
