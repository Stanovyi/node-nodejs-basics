import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import path from "node:path";

const compress = async () => {
  const inputPath = path.join(process.cwd(), "files", "fileToCompress.txt");
  const outputPath = path.join(process.cwd(), "files", "archive.gz");

  const readStream = createReadStream(inputPath);
  const gzip = createGzip();
  const writeStream = createWriteStream(outputPath);

  readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on("finish", () => {
      console.log("Successfully moved to the archive.gz");
    })
    .on("error", (err) => {
      console.error(`Error compressing file: ${err.message}`);
    });
};

await compress();
