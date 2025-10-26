import { access, rename as renameFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldPath = join(__dirname, "files", "wrongFilename.txt");
  const newPath = join(__dirname, "files", "properFilename.md");

  try {
    await access(oldPath);
  } catch (e) {
    throw new Error("FS operation failed");
  }

  try {
    await access(newPath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.message === "FS operation failed") {
      throw error;
    }
  }

  await renameFile(oldPath, newPath);
};

await rename();
