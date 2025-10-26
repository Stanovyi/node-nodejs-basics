import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { pipeline } from "stream/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const sourceFile = join(__dirname, "files", "archive.gz");
  const destFile = join(__dirname, "files", "fileToCompress.txt");

  const readStream = createReadStream(sourceFile);
  const writeStream = createWriteStream(destFile);
  const gunzipStream = createGunzip();

  await pipeline(readStream, gunzipStream, writeStream);
};

await decompress();
