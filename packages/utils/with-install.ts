// 该文件会导出一个工具方法，该方法用于组件的安装

import type {App, Plugin} from 'vue';

export type SFCWithInstall<T> = T & Plugin & { install(app: App): void; name: string };

export const withInstall = <T>(com: T) => {
    const c = com as SFCWithInstall<T>;
    c.install = (app: App) => {
        app.component(c.name, c);
    }
    return com
}
