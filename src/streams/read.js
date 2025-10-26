import { createReadStream } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = join(__dirname, "files", "fileToRead.txt");
  const readStream = createReadStream(filePath, "utf-8");

  readStream.on("error", (error) => {
    throw error;
  });

  readStream.pipe(process.stdout);

  await new Promise((resolve, reject) => {
    readStream.on("end", () => {
      process.stdout.write("\n");
      resolve();
    });
    readStream.on("error", reject);
  });
};

await read();
