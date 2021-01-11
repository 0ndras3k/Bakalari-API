import { Logger, LoggerOptions } from "winston";

export namespace Bakalari {

    export interface Config {
        url: string
        loggerOptions?: LoggerOptions
        logErrors?: boolean
    }

    export interface ConstructorOptions {
        url: string;
        logger: Logger;
    }

}

export default Bakalari;