import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          <small>
            By <a href="https://www.pmcf.xyz">Pedro MC Fernandes</a>, unless otherwise stated or link-referenced.
          </small>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <small>
                <a href={link}>{text}</a>
              </small>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
