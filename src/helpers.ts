import chalk from "chalk"
import { BakalariFactory } from "./factory/BakalariFactory"

const formatMatch = (match: string, type: string) => {
  switch (type) {
    case "number":
      return chalk.yellow(match)
    case "string":
      return chalk.green(match)
    case "boolean":
      return chalk.blue(match)
    case "key":
      match = match.replace(/['"]+/g, "")
      match = match.replace(":", chalk.whiteBright(":"))
      return chalk.bold.blueBright(match)
    case "unknown":
      return chalk.gray(match)
    case "null":
    default:
      return chalk.red(match)
  }
}

export const withBakalari = (...args: any[]) =>
  chalk.yellowBright("{Bakalari-API} " + chalk.green(args.join(" ")))