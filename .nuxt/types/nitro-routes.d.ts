// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.1_db0@0.2.3_ioredis@5.5.0_magicast@_d4441f3a1fc022a6a130c3812fe43003/node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+icon@1.10.3_magicast@0.3.5_vite@6.1.0_@types+node@22.13.1_jiti@2.4.2_terser@5.38._b2125d18f4f0ba1d4fbe2f6ed48b8ecd/node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
  }
}
export {}