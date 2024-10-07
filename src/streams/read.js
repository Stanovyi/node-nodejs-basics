const read = async () => {
  const path = path.join(process.cwd(), "files", "fileToRead.txt");
  const readStream = createReadStream(path, { encoding: "utf-8" });

  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readStream.on("error", (err) => {
    console.error(`Error reading file ${err.message}`);
  });
};

await read();
