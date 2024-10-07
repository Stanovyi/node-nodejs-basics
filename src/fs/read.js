const read = async () => {
  const path = path.join(process.cwd(), "files", "fileToRead.txt");

  try {
    await fs.access(path);
    console.log(await fs.readFile(path, "utf8"));
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
