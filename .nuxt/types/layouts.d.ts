import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default"
declare module "../../node_modules/.pnpm/nuxt@3.15.4_@parcel+watcher@2.5.1_@types+node@22.13.1_db0@0.2.3_ioredis@5.5.0_magicast@_d4441f3a1fc022a6a130c3812fe43003/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}