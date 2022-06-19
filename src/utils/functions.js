import store from "../store";

export const func = {
  checkPermissions: () => {
    return store.getters.permissions;
  }
}