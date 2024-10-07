import { createHash } from "crypto";
import { createReadStream } from "fs";
import path from "node:path";

const calculateHash = async () => {
  const path = path.join(process.cwd(), "files", "fileToCalculateHashFor.txt");

  const hash = createHash("sha256");

  const fileStream = createReadStream(path);

  fileStream.on("data", (data) => {
    hash.update(data);
  });

  fileStream.on("end", () => {
    const hexHash = hash.digest("hex");
    console.log(`SHA256 Hash: ${hexHash}`);
  });

  fileStream.on("error", (err) => {
    console.error(`Error reading the file: ${err.message}`);
  });
};

await calculateHash();
