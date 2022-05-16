import { Logger } from "./Logger";

export class ConsoleLogger implements Logger {
    private static formatMessage = (message: string) => `${new Date().toLocaleTimeString()} - ${message}`;

    public debug(message: string): void {
        console.debug(ConsoleLogger.formatMessage(message));
    }

    public info(message: string): void {
        console.info(ConsoleLogger.formatMessage(message));
    }

    public warning(message: string): void {
        console.warn(ConsoleLogger.formatMessage(message));
    }

    public error(message: string): void {
        console.error(ConsoleLogger.formatMessage(message));
    }
}
