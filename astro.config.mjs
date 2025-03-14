// @ts-check
import {defineConfig} from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/favicon.png",
      title: "Feima Docs",
      social: {
        github: "https://github.com/Feima-Robotics",
      },
      sidebar: [
        {
          label: "SLAM",
          autogenerate: {
						directory: "slam",
					}
        },
      ],
      // Set English as the default language for this site.
      defaultLocale: "en",
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
        },
        // Simplified Chinese docs in `src/content/docs/zh-cn/`
        zh: {
          label: "简体中文",
          lang: "zh",
        },
      },
    }),
  ],
});
