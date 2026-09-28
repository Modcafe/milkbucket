import { getCommandVersionText, getCommandHelpText } from "../lib/commandInfo.js";
//import packageJson from "../package.json" with { type: "json" };
import metadata from "../metadata.json" with { type: "json" };
import commandMetadata from "../commandMetadata.json" with { type: "json" };
import optionMetadata from "../optionMetadata.json" with { type: "json" };

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

            let optionsText = "";

            for (const [optionName, info] of Object.entries(optionMetadata)) {
                if (optionName.startsWith("_")) continue;
                const optionNameWithAlias = `${optionName}, ${info.aliases[0]}`;
                optionsText += `                    ${optionNameWithAlias.padEnd(24)}${info.description}\n`
            }

            console.log(`
                Usage: ${metadata.name} [command] <args> <options>
            
                Commands:
${commandsText}
                
                Options:
${optionsText}
                `);        
    }
};