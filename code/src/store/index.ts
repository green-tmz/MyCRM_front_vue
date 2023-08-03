import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import BodyModule from "@/store/modules/BodyModule";
import ConfigModule from "@/store/modules/ConfigModule";
import ThemeModeModule from "@/store/modules/ThemeModeModule";
import MainMenuModule from "@/store/modules/MainMenuModule";

config.rawError = true;

const store = createStore({
  modules: {
    AuthModule,
    BodyModule,
    ConfigModule,
    ThemeModeModule,
    MainMenuModule,
  },
});

export default store;
