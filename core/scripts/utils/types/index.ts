import { Express, Response, Request } from 'express'
import { SsrRedirectResolve, ExpressReponseProxy } from './../ssr-redirect'

export interface Context {
  url: string,
  output: {
    prepend: (context: any) => string,
    append: (context: any) => string,
    filter: <T>(output: T, context: any) => T,
    appendHead: (context: any) => string,
    template: string,
    cacheTags: Set<any>
  },
  server: {
    app: Express,
    response: ExpressReponseProxy,
    request: Request,
    _redirect: {
      pendingPath: string,
      isPending: () => boolean,
      resolve: SsrRedirectResolve
    }
  },
  meta: any|null,
  vs: {
    config: Record<any, any>,
    storeCode: string
  }
}
