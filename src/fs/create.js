import { access, writeFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  const filePath = join(__dirname, "files", "fresh.txt");

  try {
    await access(filePath);

    throw new Error("FS operation failed");
  } catch (err) {
    if (err.message === "FS operation failed") {
      throw err;
    }

    await writeFile(filePath, "I am fresh and young");
  }
};

await create();
