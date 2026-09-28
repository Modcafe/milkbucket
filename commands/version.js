import { getCommandVersionText, getCommandHelpText } from "../lib/commandInfo.js";
import packageJson from "../package.json" with { type: "json" };
import metadata from "../metadata.json" with { type: "json" };

export default function help(args) {
    switch (args[0]) {
        case "-v":
        case "--version":
            console.log(getCommandVersionText("version"));
            break;
        
        case "-h":
        case "--help":
            console.log(getCommandHelpText("version"));
            break;

        default:
            console.log(`v${packageJson.version}`);        
    }
};