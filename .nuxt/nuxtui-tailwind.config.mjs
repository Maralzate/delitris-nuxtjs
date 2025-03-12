
      import { defaultExtractor as createDefaultExtractor } from "tailwindcss/lib/lib/defaultExtractor.js";
      import { customSafelistExtractor, generateSafelist } from "/home/developer/Documents/projects/delitris-nuxtjs/node_modules/.pnpm/@nuxt+ui@2.21.0_change-case@5.4.4_magicast@0.3.5_typescript@5.7.3_vite@6.1.0_@types+nod_485b3e49c0dd20330f80cab694087f43/node_modules/@nuxt/ui/dist/runtime/utils/colors";
      import formsPlugin from "@tailwindcss/forms";
      import aspectRatio from "@tailwindcss/aspect-ratio";
      import typography from "@tailwindcss/typography";
      import containerQueries from "@tailwindcss/container-queries";
      import headlessUi from "@headlessui/tailwindcss";

      const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } });

      export default {
        plugins: [
          formsPlugin({ strategy: 'class' }),
          aspectRatio,
          typography,
          containerQueries,
          headlessUi
        ],
        content: {
          files: [
            "/home/developer/Documents/projects/delitris-nuxtjs/node_modules/.pnpm/@nuxt+ui@2.21.0_change-case@5.4.4_magicast@0.3.5_typescript@5.7.3_vite@6.1.0_@types+nod_485b3e49c0dd20330f80cab694087f43/node_modules/@nuxt/ui/dist/runtime/components/**/*.{vue,mjs,ts}",
            "/home/developer/Documents/projects/delitris-nuxtjs/node_modules/.pnpm/@nuxt+ui@2.21.0_change-case@5.4.4_magicast@0.3.5_typescript@5.7.3_vite@6.1.0_@types+nod_485b3e49c0dd20330f80cab694087f43/node_modules/@nuxt/ui/dist/runtime/ui.config/**/*.{mjs,js,ts}"
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
                ...customSafelistExtractor("U", content, ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","tris","primary"], ["primary"])
              ]
            }
          }
        },
        safelist: generateSafelist(["primary"], ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","tris","primary"]),
      }
    