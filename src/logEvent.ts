import { LogLevel } from './logLevel';
import { MessageTemplate } from './messageTemplate';

export class LogEvent {
	
	public timestamp: Date = new Date();

	constructor(public logLevel: LogLevel, public messageTemplate: MessageTemplate, public args: any[] = void 0, public error: Error = void 0) {
		console.log(`LogEvent.ctor(${logLevel}, ${JSON.stringify(messageTemplate)}, ${JSON.stringify(args)}, ${JSON.stringify(error)})`);
		this.timestamp = new Date();
	}
}
