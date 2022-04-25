import React from "react";
import { footerData } from "@/src/data/footerData";
import { socialMedia } from "@/src/data/social-media";
import Link from "next/link";

const Footer = () => {
  const { address, businessName, links } = footerData;
  const { street, city, postcode, country } = address;

  return (
    <footer className="footer">
      <div className="footer__content">
        <section className="footer__section">
          <h3 className="footer__heading">Business Address</h3>
          <ul className="footer__list">
            <li className="footer__list-item">{businessName}</li>
            <li className="footer__list-item">{street}</li>
            <li className="footer__list-item">{city}</li>
            <li className="footer__list-item">{postcode}</li>
            <li className="footer__list-item">{country}</li>
          </ul>
        </section>

        <section className="footer__section">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__list">
            {links.map((item, i) => (
              <li key={i} className="footer__list-item">
                <FooterLink link={item} className="footer__link" />
              </li>
            ))}
          </ul>
        </section>

        <section className="footer__section">
          <h3 className="footer__heading">Paradox Media</h3>
          <ul className="footer__list">
            {socialMedia.map((item, i) => (
              <li key={i} className="footer__list-item">
                <FooterSocialLink
                  item={item}
                  className="footer__link--social"
                />
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="footer__copy">
        <div className="section__content-box">
          Copyright &copy; theparadox.studio {new Date().getFullYear()}. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const FooterLink = ({ link, className = "" }) => {
  const { type, label, show, url } = link;
  const cls = `link ${className}`;

  if (!show) return null;

  // prettier-ignore
  if (type === LINK_TYPES.internal) return <Link className={cls} href={url} passHref><strong>#</strong> {label}</Link>

  // prettier-ignore
  if (type === LINK_TYPES.external) return <a target="_blank"
  rel="noopener noreferrer" className={cls} href={url}><strong>#</strong> {label}</a>

  // TODO: implement scroll to content
  // prettier-ignore
  if (type === LINK_TYPES.anchor) return <a target="_blank"
  rel="noopener noreferrer" className={cls} href={url}><strong>#</strong> {label}</a>
};

const FooterSocialLink = ({ item }) => {
  const { icon, label, link, show } = item;

  if (!show) return null;

  return (
    <a
      className="link footer__link--social"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="social__icon">{icon}</div>
      <div className="social__label">{label}</div>
    </a>
  );
};

const LINK_TYPES = {
  internal: "internal",
  anchor: "anchor",
  external: "external",
};
