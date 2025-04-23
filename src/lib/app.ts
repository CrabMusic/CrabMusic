import { ensureDirExists } from "./fs"

export const setupDirectories = async () => Promise.all([
    ensureDirExists("media"),
    ensureDirExists("playlist"),
]);

