import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin & {
    install(app: App): void;
    name: string;
};
export declare const withInstall: <T>(com: T) => T;
