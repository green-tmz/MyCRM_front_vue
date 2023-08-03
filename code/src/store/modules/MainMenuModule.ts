import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

export interface MainMenu {
  name: string;
  surname: string;
  email: string;
  password: string;
  api_token: string;
}

@Module
export default class MainMenuModule extends VuexModule {
  mainMenu = [{}];
  /**
   * Get current user object
   * @returns array
   */
  get getMainMenu() {
    return this.mainMenu;
  }

  @Mutation
  [Mutations.SET_MENU]() {
    this.mainMenu = [
      {
        pages: [
          {
            heading: "dashboard",
            route: "/dashboard",
            svgIcon: "media/icons/duotune/art/art002.svg",
            fontIcon: "bi-app-indicator",
          },
        ],
      },
    ];
  }

  //   @Action
  //   [Actions.LOGIN](credentials) {
  //     ApiService.get("http://localhost/sanctum", "csrf-cookie");
  //     return ApiService.post("login", credentials)
  //       .then(({ data }) => {
  //         this.context.commit(Mutations.SET_AUTH, data);
  //       })
  //       .catch(({ response }) => {
  //         this.context.commit(Mutations.SET_ERROR, response.data.error.fields);
  //       });
  //   }
}
