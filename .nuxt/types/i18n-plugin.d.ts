// Generated by @nuxtjs/i18n
import type { ExportedGlobalComposer, Composer } from 'vue-i18n'
import type { NuxtI18nRoutingCustomProperties, ComposerCustomProperties } from '../../node_modules/.pnpm/@nuxtjs+i18n@8.5.6_magicast@0.3.5_rollup@4.34.6_vue@3.5.13_typescript@5.7.3_/node_modules/@nuxtjs/i18n/dist/runtime/types.ts'
import type { Strategies, Directions, LocaleObject } from '../../node_modules/.pnpm/@nuxtjs+i18n@8.5.6_magicast@0.3.5_rollup@4.34.6_vue@3.5.13_typescript@5.7.3_/node_modules/@nuxtjs/i18n/dist/types.d.ts'

declare module 'vue-i18n' {
  interface ComposerCustom extends ComposerCustomProperties<LocaleObject[]> {}
  interface ExportedGlobalComposer extends NuxtI18nRoutingCustomProperties<LocaleObject[]> {}
  interface VueI18n extends NuxtI18nRoutingCustomProperties<LocaleObject[]> {}
}

declare module '#app' {
  interface NuxtApp {
    $i18n: ExportedGlobalComposer & Composer & NuxtI18nRoutingCustomProperties<LocaleObject[]>
  }
}



export {}