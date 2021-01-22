import Bakalari from "./types/bakalari"

import { Logger } from "winston"

export class BakalariInstance {
  private BakalariUrl: string

  private logger: Logger

  constructor({ url, logger }: Bakalari.ConstructorOptions) {
    this.BakalariUrl = url
    this.logger = logger
  }

  public getUrl() {
    return this.BakalariUrl
  }

  public getLogger() {
    return this.logger
  }
}

export default BakalariInstance
