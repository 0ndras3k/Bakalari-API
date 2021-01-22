import { Logger, LoggerOptions } from "winston"
import { BakalariInstance } from "../BakalariInstance"

export namespace Bakalari {
  export interface Config {
    url: string
    loggerOptions?: LoggerOptions
    logErrors?: boolean
  }

  export interface ConstructorOptions {
    url: string
    logger: Logger
  }

  export interface UseWinston {
    winston: Logger
  }

  export type Bakalari = BakalariInstance
}

export default Bakalari
