import objectPath from "object-path";
import merge from "deepmerge";
import layoutConfig from "@/core/config/DefaultLayoutConfig";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import { Mutation, Module, VuexModule, Action } from "vuex-module-decorators";
import LayoutConfigTypes from "@/core/config/LayoutConfigTypes";
import ApiService from "@/core/services/ApiService";

interface StoreInfo {
  config: LayoutConfigTypes;
  initial: LayoutConfigTypes;
}

@Module
export default class ConfigModule extends VuexModule implements StoreInfo {
  config: LayoutConfigTypes = layoutConfig;
  initial: LayoutConfigTypes = layoutConfig;

  /**
   * Get config from layout config
   * @returns {function(path, defaultValue): *}
   */
  get layoutConfig() {
    return (path, defaultValue) => {
      return objectPath.get(this.config, path, defaultValue);
    };
  }

  @Mutation
  [Mutations.SET_LAYOUT_CONFIG_PROPERTY](payload): void {
    const { property, value } = payload;
    objectPath.set(this.config, property, value);
    localStorage.setItem("config", JSON.stringify(this.config));
  }

  @Mutation
  [Mutations.RESET_LAYOUT_CONFIG]() {
    this.config = Object.assign({}, this.initial);
  }

  @Mutation
  [Mutations.OVERRIDE_LAYOUT_CONFIG](): void {
    this.config = this.initial = Object.assign(
      {},
      this.initial,
      JSON.parse(window.localStorage.getItem("config") || "{}")
    );
  }

  @Mutation
  [Mutations.OVERRIDE_PAGE_LAYOUT_CONFIG](payload): void {
    this.config = merge(this.config, payload);
  }

  @Action
  [Actions.MENU]() {
    ApiService.get("main-menu").then(({ data }) => {
      this.context.commit(Mutations.SET_LAYOUT_CONFIG_PROPERTY, {
        property: "sidebar.menu",
        value: data,
      });
    });
  }
}
