import { spawnSync } from "child_process";

const main = () => {
    generateApiClient();

    if (!isApiClientUpToDate()) {
        console.error(
            `${GENERATED_FILEPATH} is not up to date. Please run "npm run generate-api-client" and commit the changes.`
        );
        process.exit(1);
    }
};

const generateApiClient = () => {
    runNpxCommand(`oazapfts ./bnomial/openapi.yml ${GENERATED_FILEPATH} --optimistic`);
    runNpxCommand(`prettier -w ${GENERATED_FILEPATH}`);
};

const isApiClientUpToDate = () => {
    const { stdout } = spawnSync("git", ["status"]);
    return !stdout.toString().includes(GENERATED_FILEPATH);
};

const GENERATED_FILEPATH = "src/api/generatedClient.ts";

const runNpxCommand = (command: string) => {
    const { status } = spawnSync("npx", command.split(" "), {
        stdio: "inherit",
    });
    if (status !== 0) {
        process.exit(status || 1);
    }
};

if (require.main === module) {
    main();
}
