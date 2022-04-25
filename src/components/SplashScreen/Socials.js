import * as React from "react"
import { SocialIcon } from "./SocialIcon"
import { socialMedia } from "../../data/social-media"

const Socials = () => {
  return (
    <div className="socials">
      {socialMedia.map((item, i) => (
        <SocialIcon key={i} item={item} />
      ))}
    </div>
  )
}

export default Socials
