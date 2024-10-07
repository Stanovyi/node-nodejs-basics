import fs from "node:fs/promises";
import path from "node:path";

const create = async () => {
  const path = path.join(process.cwd(), "files", "fresh.txt");

  try {
    await fs.access(path);
    throw new Error("FS operation failed");
  } catch {
    await fs.writeFile(path, "I am fresh and young");
  }
};

await create();
