import { createWriteStream } from "fs";
import path from "node:path";

const write = async () => {
  const path = path.join(process.cwd(), "files", "fileToWrite.txt");
  process.stdin.pipe(createWriteStream(path));

  writeStream.on("finish", () => {
    console.log("Successfully written to the file");
  });

  writeStream.on("error", (err) => {
    console.error(`Error writing of the file: ${err.message}`);
  });
};

await write();
