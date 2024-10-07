import { createReadStream, createWriteStream } from "fs";
import path from "node:path";

const decompress = async () => {
  const inputPath = path.join(process.cwd(), "files", "archive.gz");
  const outputPath = path.join(process.cwd(), "files", "fileToCompress.txt");

  const readStream = createReadStream(inputPath);
  const gunzip = createGunzip();
  const writeStream = createWriteStream(outputPath);

  readStream
    .pipe(gunzip)
    .pipe(writeStream)
    .on("finish", () => {
      console.log("Successfully decompress to the fileToCompress.txt");
    })
    .on("error", (err) => {
      console.error(`Unsuccessful decompressing of the file: ${err.message}`);
    });
};

await decompress();
