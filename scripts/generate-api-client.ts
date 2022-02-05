import { spawnSync } from "child_process";

const GENERATED_FILEPATH = 'src/api/generatedClient.ts';

const runNpxCommand = (command: string) => {
    spawnSync("npx", command.split(' '), {
        stdio: "inherit",
    });
};

runNpxCommand(`oazapfts ./bnomial/openapi.yml ${GENERATED_FILEPATH} --optimistic`);

const { stdout } = spawnSync("git", ["status"]);

if (stdout.toString().includes(GENERATED_FILEPATH)) {
  console.error(`${GENERATED_FILEPATH} is not up to date. Please run "npm run generate-api-client" and commit the changes.`);
  process.exit(1);
}
