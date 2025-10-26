import { createReadStream } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, "files", "fileToRead.txt");
  const readStream = createReadStream(filePath, "utf-8");

  readStream.pipe(process.stdout);

  readStream.on("error", (error) => {
    throw error;
  });
};

await read();
