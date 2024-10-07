import fs from "node:fs/promises";
import path from "node:path";

const rename = async () => {
  const originalPath = path.join(process.cwd(), "files", "wrongFilename.txt");
  const newPath = path.join(process.cwd(), "files", "properFilename.md");

  try {
    await fs.access(originalPath);
    await fs.access(newPath);

    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.rename(originalPath, newPath);
    } else {
      throw err;
    }
  }
};

await rename();
