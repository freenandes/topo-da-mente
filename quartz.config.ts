import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Topo da mente",
    enableSPA: false,
    enablePopovers: false,
    analytics: null,
    baseUrl: "pmcf.xyz/topo-da-mente",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Lexend Zetta",
        body: "Lexend",
        code: "Monaspace Neon",
      },
      colors: {
        lightMode: {
          light: "#F8F8F6",
          lightgray: "#C3C3C4",
          gray: "#8E8F93",
          darkgray: "#585A61",
          dark: "#23252F",
          secondary: "#0050db",
          tertiary: "hsla(218, 100%, 43%, 0.6)",
          highlight: "hsla(218, 100%, 43%, 0.15)",
        },
        darkMode: {
          light: "#23252F",
          lightgray: "#474850",
          gray: "#8E8F93",
          darkgray: "#B1B2B4",
          dark: "#D5D5D5",
          secondary: "#8db4fa",
          tertiary: "#6A84B6",
          highlight: "hsla(219, 92%, 77%, 0.2)",
        },
      },
    },
  },
  // @ts-ignore
  build: {
    fingerprint: {
      exclude: [
        "content/attachment/zettel-notes/**"
      ]
    }
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"], // you can add 'git' here for last modified from Git but this makes the build slower
      }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.Description(),
    ],
    filters: [
      Plugin.RemoveDrafts(),
      // Plugin.ExplicitPublish(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
