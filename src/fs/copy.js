import { access, cp } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const sourceDir = join(__dirname, "files");
  const destDir = join(__dirname, "files_copy");

  try {
    await access(sourceDir);
  } catch (error) {
    throw new Error("FS operation failed");
  }

  try {
    await access(destDir);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.message === "FS operation failed") {
      throw err;
    }
  }

  await cp(sourceDir, destDir, { recursive: true });
};

await copy();
