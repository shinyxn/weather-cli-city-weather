#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { fetchWeather } from "../utils/fetch.js";

yargs(hideBin(process.argv))
  .usage("Usage: $0 [command]")
  .command(
    "$0",
    "",
    () => {},
    (argv) => {
      console.log(`Usage: ${argv.$0} get <city>\nExample: ${argv.$0} get Tokyo`);
    }
  )
  .command(
    "get [city]",
    "fetch weather data",
    (yargs) => {
      return yargs.positional("city", {
        describe: "city for fetching data",
        default: "Tokyo",
      });
    },
    (argv) => {
      if (argv.verbose) console.info(`Fetching weather data for ${argv.city}`);
      fetchWeather(argv.city);
    }
  )
  .help("h")
  .alias("h", "help")
  .parse();
