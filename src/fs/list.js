import fs from "node:fs/promises";

const list = async () => {
  const path = path.join(process.cwd(), "files");

  try {
    await fs.access(path);
    console.log(await fs.readdir(path));
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
