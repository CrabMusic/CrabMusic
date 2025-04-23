import { exists, mkdir, BaseDirectory } from "@tauri-apps/plugin-fs";

export const ensureDirExists = async (path: string) =>
    (await exists(path, {
        baseDir: BaseDirectory.AppLocalData,
    })) || (await mkdir(path, { baseDir: BaseDirectory.AppLocalData }));

