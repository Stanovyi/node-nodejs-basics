import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  const originalPath = path.join(process.cwd(), "files");
  const targetPath = path.join(process.cwd(), "files_copy");

  try {
    await fs.access(originalPath);
    await fs.access(targetPath);

    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.cp(originalPath, targetPath, { recursive: true });
    } else {
      throw err;
    }
  }
};

await copy();
