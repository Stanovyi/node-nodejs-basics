import fs from "node:fs/promises";
import path from "node:path";

const remove = async () => {
  const path = path.join(process.cwd(), "files", "fileToRemove.txt");
  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
