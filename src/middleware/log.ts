import { Middleware } from "vue-router";

export default async ({ next, to, from }: Middleware) => {
    console.log('Middleware: log')
    next()
};
