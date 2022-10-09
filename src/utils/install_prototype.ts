import * as utils from "./index";
import { App } from 'vue'
export default {
    install(app: App) {
        if (app) app.config.globalProperties.$utils = utils
    }
};