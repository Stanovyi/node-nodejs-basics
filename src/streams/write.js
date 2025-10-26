import { createWriteStream } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const filePath = join(__dirname, "files", "fileToWrite.txt");
  const writeStream = createWriteStream(filePath);

  process.stdin.pipe(writeStream);

  writeStream.on("error", (err) => {
    throw err;
  });
};

await write();
