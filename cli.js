#!/usr/bin/env node
import packageJson from "./package.json" with { type: "json" };
import metadata from "./metadata.json" with { type: "json" };

import help from "./commands/help.js";
import getVersion from "./commands/version.js";

const args = process.argv.slice(2);
const command = args.shift();

switch (command) {
    case "help":
    case "--help":
    case "-h":
        help(args);
        break;

    case "version":
    case "--version":
    case "-v":
        getVersion(args);
        break;
    
    
/**********************************/
    case undefined:
        console.log(`Welcome to ${metadata.displayName} v${packageJson.version}.
Type "${metadata.name} ${metadata.commands.help}" for more information.`);
        break;

    default:
        console.error(`Unknown command: ${command}\nUse ${metadata.name} ${metadata.commands.help} for a list of useable commands.`);
        process.exit(1);
}