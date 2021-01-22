import Bakalari from "../types/bakalari"
import WinstonFactory from "./WinstonFactory"

export class BakalariFactory {
  static defaultConfig: Bakalari.ConstructorOptions = {
    url: "example.bakalari.cz",
    logger: WinstonFactory.create(),
  }
}
