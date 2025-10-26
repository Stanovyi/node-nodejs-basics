import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { pipeline } from "stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const sourceFile = join(__dirname, "files", "fileToCompress.txt");
  const destFile = join(__dirname, "files", "archive.gz");

  const readStream = createReadStream(sourceFile);
  const writeStream = createWriteStream(destFile);
  const gzipStream = createGzip();

  await pipeline(readStream, gzipStream, writeStream);
};

await compress();
