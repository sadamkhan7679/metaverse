import * as React from "react"

const Text = () => {
  return (
    <div className="text">
      <StrobeText>Coming Soon</StrobeText>
      <p className="header">
        The metaverse is a digital realm of possibility that connects the world
        and its creations
      </p>
    </div>
  )
}

export default Text

export const StrobeText = ({ children, className }) => {
  const cls = `strobe-text animation ${className ? className : ""}`
  return (
    <div className={cls} data-text="Strobocops">
      <span
        className="glitch__color glitch__color--red animation"
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className="glitch__color glitch__color--blue animation"
        aria-hidden="true"
      >
        {children}
      </span>
      <span
        className="glitch__color glitch__color--green animation"
        aria-hidden="true"
      >
        {children}
      </span>
      <span className="glitch__main--hidden animation" aria-hidden="true">
        {children}
      </span>
      <h1 className="glitch__main animation">{children}</h1>
    </div>
  )
}

export const Header = ({ children, className = "" }) => (
  <h1 className="text--heading">{children}</h1>
)

export const Headline = ({ children, className = "" }) => (
  <div className={`text--headline ${className}`}>{children}</div>
)

export const Paragraph = ({ children, className = "" }) => (
  <div className={`text--paragraph ${className}`}>{children}</div>
)
