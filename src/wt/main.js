import { Worker } from "worker_threads";
import { cpus } from "os";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const numCores = cpus().length;
  const workerPath = join(__dirname, "worker.js");
  const results = [];

  const promises = [];

  for (let i = 0; i < numCores; i++) {
    const workerPromise = new Promise((resolve) => {
      const worker = new Worker(workerPath);
      const num = 10 + i;

      worker.on("message", (data) => {
        resolve({ status: "resolved", data });
        worker.terminate();
      });

      worker.on("error", () => {
        resolve({ status: "error", data: null });
        worker.terminate();
      });

      worker.postMessage(num);
    });

    promises.push(workerPromise);
  }

  const allResults = await Promise.all(promises);
  console.log(allResults);
};

await performCalculations();
