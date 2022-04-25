import React from "react"
import { RiInstagramLine, RiTwitterLine } from "react-icons/ri"
import { FaDiscord, FaTelegramPlane, FaTiktok } from "react-icons/fa"

export const socialMedia = [
  {
    label: "Instagram",
    link: "https://www.instagram.com/paradoxmeta.io",
    show: true,
    icon: <RiInstagramLine />,
  },
  {
    label: "Telegram",
    link: "https://t.me/paradoxmeta_io",
    show: true,
    icon: <FaTelegramPlane />,
  },
  {
    label: "Tik Tok",
    link: "https://www.tiktok.com/@paradoxmeta.io",
    show: true,
    icon: <FaTiktok />,
  },
  {
    label: "Discord",
    link: "https://discord.gg/paradoxmetaverse",
    show: true,
    icon: <FaDiscord />,
  },
  {
    label: "Twitter",
    link: "https://twitter.com/Paradoxmeta_io",
    show: true,
    icon: <RiTwitterLine />,
  },
]
