import * as React from "react"

export const SocialIcon = ({ item }) => {
  const { icon, label, link } = item

  return (
    <a
      className="social__link"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Social media link to ${label}`}
    >
      <div className="social__box">{icon}</div>
    </a>
  )
}
