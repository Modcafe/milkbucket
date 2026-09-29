import fs from "node:fs";
import path from "node:path";

function getPath(filePath) {
    return path.join(process.cwd(), filePath);
}

export function exists(filePath) {
    return fs.existsSync(getPath(filePath));
}

export function readFile(filePath) {
    return fs.readFileSync(getPath(filePath), "utf8");
}

export function writeFile(filePath, content) {
    const fullPath = getPath(filePath);
    const directory = path.dirname(fullPath);

    fs.mkdirSync(directory, { recursive: true });
    fs.writeFileSync(fullPath, content);
}

export function appendFile(filePath, content) {
    fs.appendFileSync(getPath(filePath), content);
}

export function deleteFile(filePath) {
    fs.rmSync(getPath(filePath));
}