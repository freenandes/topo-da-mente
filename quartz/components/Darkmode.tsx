// @ts-ignore: this is safe, we don't want to actually make darkmode.inline.ts a module as
// modules are automatically deferred and we don't want that to happen for critical beforeDOMLoads
// see: https://v8.dev/features/modules#defer
import darkmodeScript from "./scripts/darkmode.inline"
import styles from "./styles/darkmode.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Darkmode({ displayClass }: QuartzComponentProps) {
  return (
    <div class={`darkmode ${displayClass ?? ""}`}>
      <input class="toggle" id="darkmode-toggle" type="checkbox" tabIndex={-1} />
      <label id="toggle-label-light" for="darkmode-toggle" tabIndex={-1}>
        <svg id="dayIcon" width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" stroke-width="2" fill="none">
          <title>Light mode</title>
          <path d="M3 13L5 11"/>
          <path d="M11 5L13 3"/>
          <path d="M13 13L11 11"/>
          <path d="M5 5L3 3"/>
          <path d="M8 4V1"/>
          <path d="M4 8L1 8"/>
          <path d="M8 15V12"/>
          <path d="M15 8L12 8"/>
          <circle cx="8" cy="8" r="1"/>
        </svg>
      </label>
      <label id="toggle-label-dark" for="darkmode-toggle" tabIndex={-1}>
        <svg id="nightIcon" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" stroke="none">
          <title>Dark mode</title>
          <path d="M13.892 9.1391C12.9754 10.2741 11.5725 11 10 11C7.23858 11 5 8.76142 5 6C5 4.42751 5.72591 3.02457 6.8609 2.10799C4.09193 2.64014 2 5.07577 2 8C2 11.3137 4.68629 14 8 14C10.9242 14 13.3599 11.9081 13.892 9.1391Z" clip-rule="evenodd"/>
        </svg>
      </label>
    </div>
  )
}

Darkmode.beforeDOMLoaded = darkmodeScript
Darkmode.css = styles

export default (() => Darkmode) satisfies QuartzComponentConstructor
