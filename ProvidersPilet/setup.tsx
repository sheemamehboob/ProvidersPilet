import { PiletApi } from "../piral~/ProvidersPilet/node_modules/goodhealth-piral";

export default (app: PiletApi) => {
    app.registerTile(app.fromBlazor("my-tile"));
    app.registerMenu(app.fromBlazor("providers-menu"));
  /*  app.registerPage("/providers", app.fromBlazor("providers"));   */ 
};
