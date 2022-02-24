import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    middleware?: Array<Function>;
  }
  interface Middleware {
    to: RouteLocationNormalized;
    from: RouteLocationNormalized;
    next: NavigationGuardNext;
  }
}

export default (datas?: any) =>
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    if (to.meta?.middleware?.length) {
      const arr = to.meta.middleware;
      for (let index = 0; index < arr.length; index++) {
        const method: Function = arr[index];
        const result = method({ ...datas, to, from, next });
        if (result === false) {
          break;
        }
      }
      return;
    }

    return next();
  };
