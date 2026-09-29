import { exists } from "../lib/fileTools";

export function loadPackageOptions() {
    if (exists("milkbucket.package.json")) 
        console.log("No milkbucket.package.json found.")
        return;
}

loadPackageOptions();