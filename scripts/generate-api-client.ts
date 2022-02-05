import { spawnSync } from "child_process";

const runNpxCommand = (command: string) => {
    spawnSync("npx", command.split(' '), {
        stdio: "inherit",
    });
};

runNpxCommand("oazapfts ./bnomial/openapi.yml ./src/api/generatedClient.ts --optimistic");
