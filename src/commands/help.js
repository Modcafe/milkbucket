import { getCommandVersionText, getCommandHelpText } from "../lib/commandInfo.js";
//import packageJson from "../package.json" with { type: "json" };
import metadata from "../metadata.json" with { type: "json" };
import commandMetadata from "../commandMetadata.json" with { type: "json" };
import flagMetadata from "../flagMetadata.json" with { type: "json" };

export default function help(args) {
    switch (args[0]) {
        case "-v":
        case "--version":
            console.log(getCommandVersionText("help"));
            break;
        
        case "-h":
        case "--help":
            console.log(getCommandHelpText("help"));
            break;

        default:
            let commandsText = "";

            for (const [commandName, info] of Object.entries(commandMetadata)) {
                if (commandName.startsWith("_")) continue;

                commandsText += `                    ${commandName.padEnd(24)}${info.description}\n`
            }

            let flagText = "";

            for (const [flagName, info] of Object.entries(flagMetadata)) {
                if (flagName.startsWith("_")) continue;
                const flagNameWithAlias = `${flagName}, ${info.aliases[0]}`;
                flagText += `                    ${flagNameWithAlias.padEnd(24)}${info.description}\n`
            }

            console.log(`
                Usage: ${metadata.name} [command] <args> <flags>
            
                Commands:
${commandsText}
                
                Flags:
${flagText}
                `);        
    }
};