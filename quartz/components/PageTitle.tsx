import { pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function PageTitle({ fileData, cfg, displayClass }: QuartzComponentProps) {
  const title = cfg?.pageTitle ?? "Untitled Quartz"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={`page-title ${displayClass ?? ""}`}>
      <svg width="200" height="30" viewBox="0 0 200 30" stroke="currentColor" stroke-width="2" fill="none">
        <title>Logo</title>
        <path d="M1 21C17.0401 6.13977 6.51629 27.9873 14.5363 19.7217C21.3384 12.7114 26.2055 32.331 41.1028 16.4155C56 0.5 78.1955 42.3143 90.7268 16.4155C103.258 -9.48328 107.769 3.74162 121.805 23.028C135.84 42.3143 141.704 -1.64335 156.391 11.4563C182.957 35.1508 185.967 9.04066 199 14"/>
        <path d="M133 5V2"/>
        <path d="M131 7L128 7"/>
        <path d="M133 12V9"/>
        <path d="M138 7L135 7"/>
        <path d="M109 19V16"/>
        <path d="M107 21L104 21"/>
        <path d="M109 26V23"/>
        <path d="M114 21L111 21"/>
        <path d="M31 9V6"/>
        <path d="M29 11L26 11"/>
        <path d="M31 16V13"/>
        <path d="M36 11L33 11"/>
      </svg>
      <a href={baseDir}>{title}</a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
