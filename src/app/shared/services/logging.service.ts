
import { Injectable } from '@angular/core';

/**
 * Provides a centralized service to logging needs.
 */
@Injectable()
export class LoggingService {

    /* tslint:disable:unified-signatures */
    /**
     * Report an message to the user
     *
     * @param msg the user message
     */
    report(msg: string): void;

    /**
     * Report an error to the user and console the error.
     *
     * @param msg the user message
     * @param error the error
     */
    report(msg: string, error: any): void;
    /* tslint:enable:unified-signatures */

    report(msg: string, error?: any): void {

        if (error) {
            this.error(msg, '\nDetails:', error);
        }
        alert(`${msg}\nSee developer log for details`);
    }

    /**
     * Log an informational message.
     *
     * @param msg the message
     * @param extra additional values to log
     */
    info(msg, ...extra: any[]): void {

        console.log(`[INFO] ${msg}`, ...extra);
    }

    /**
     * Log a warning message.
     *
     * @param msg  the message
     * @param extra  additional values to log
     */
    warn(msg, ...extra: any[]): void {

        console.log(`[WARNING] ${msg}`, ...extra);
    }

    /**
     * Log an error message.
     *
     * @param msg the message
     * @param extra additional values to log
     */
    error(msg, ...extra: any[]): void {

        console.log(`[ERROR] ${msg}`, ...extra);
    }

    /**
     * Executes the given callback within a try block and reports any exception.
     *
     * @param cb callback
     * @param msg the message
     */
    tryWithReport(cb: Function, msg: string) {

        try {
            cb();
        } catch (ex) {
            this.report(msg, ex);
        }
    }
}
