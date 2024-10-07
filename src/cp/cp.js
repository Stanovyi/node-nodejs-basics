import { spawn } from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const child = spawn("node", [path.resolve(__dirname, "script.js"), ...args], {
    stdio: ["inherit", "inherit", "inherit"],
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  child.on("exit", (code) => {
    console.log(`Exited with code ${code}`);
  });
};

spawnChildProcess(["arg1", "arg2", "arg3"]);
