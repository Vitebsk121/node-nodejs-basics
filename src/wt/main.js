import { cpus } from 'os';
import { Worker } from 'node:worker_threads';
import { getPath } from "../helpers/helpers.js";

const workerFuncPath = getPath(import.meta.url, ['worker.js']);

const performCalculations = async () => {
    const cpuCoreInfo = cpus();
    const workersList = cpuCoreInfo.map((_, i) => {
      const workerData = 10 + i;
      return  new Promise((res, rej) => {
        const worker = new Worker(workerFuncPath, { workerData });

        worker.on("message", (value) => res(value));
        worker.on('error', (err) => rej(err));
      })
    });

    const workersStateList = await Promise.allSettled(workersList);

    const result = workersStateList.map(({ status, value }) => (
      {
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null,
      }
    ))

    console.log(result);
};

await performCalculations();
