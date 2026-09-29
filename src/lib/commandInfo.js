import commandMetadata from "../commandMetadata.json" with { type: "json" };
import packageJson from "../package.json" with { type: "json" };
import metadata from "../metadata.json" with { type: "json" };

export function getCommandVersionText(commandName) {
    const lastUpdated = commandMetadata[commandName].lastUpdated;
    const firstAdded = commandMetadata[commandName].firstAdded;
    const contributors = commandMetadata[commandName].contributors;

    return `${metadata.name} ${commandName}

    last Updated:   ${lastUpdated}
    first Added:    ${firstAdded}
    Contributors:   ${contributors.join(", ")}
        
For more Information, use ${metadata.name} ${commandName} -h`;
}

export function getCommandHelpText(commandName) {
    const description = commandMetadata[commandName].description;
    const rawCommandArgs = commandMetadata[commandName].args;

    let commandArgs = commandName;
    if (rawCommandArgs) {
        commandArgs = `${commandName} ${rawCommandArgs}`;
    }
    
    return `${metadata.name} ${commandArgs}
    
    ${description}
    
For more Information, use ${metadata.name} ${commandName} -v`;
}