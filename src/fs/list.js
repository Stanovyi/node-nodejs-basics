import { readdir } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const dirPath = join(__dirname, "files");

  try {
    const files = await readdir(dirPath);
    files.sort();
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
