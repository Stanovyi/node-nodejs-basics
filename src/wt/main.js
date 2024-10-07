import { Worker } from "worker_threads";
import os from "os";
import path from "node:path";

const performCalculations = async () => {
  const numCPUs = os.cpus().length;
  const results = new Array(numCPUs);

  return new Promise((resolve) => {
    for (let i = 0; i < numCPUs; i++) {
      const worker = new Worker(path.resolve(__dirname, "worker.js"));

      worker.postMessage(i + 10);

      worker.on("message", (result) => {
        results[i] = result;

        if (results.filter((r) => r !== undefined).length === numCPUs) {
          resolve(results);
        }
      });

      worker.on("error", (error) => {
        console.error(`Worker error: ${error.message}`);
      });

      worker.on("exit", (code) => {
        if (code !== 0) {
          console.error(`Stopped with exit code ${code}`);
        }
      });
    }
  });
};

const results = await performCalculations();
console.log("Results:", results);
