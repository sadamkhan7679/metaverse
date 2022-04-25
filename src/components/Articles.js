import React from "react"
import { Headline, StrobeText } from "./SplashScreen/Text"

const Articles = () => {
  return (
    <section className="article">
      <header className="section__header">
        <Headline>The Paradox Metaverse </Headline>
        <StrobeText>in the web</StrobeText>
      </header>

      <section className="article__section">
        <div className="article__content">
          <ul className="article__list">
            {articlesData.map((item, i) => (
              <li key={i} className="article__list-item">
                <a
                  href={item.url}
                  className="link article__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Headline className="article__source">{item.source}</Headline>
                  <div className="article__text">
                    {item.label.slice(0, 30)}...
                  </div>
                  <div className="article__more">Read more</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  )
}

export default Articles

const articlesData = [
  {
    url: "https://finance.yahoo.com/news/amiotalio-university-offers-education-programs-113400586.html",
    label: `AmioTalio University Offers Education Programs for Financial Success`,
    source: "Yahoo Finance",
  },
  {
    url: "https://finance.yahoo.com/news/amiotalio-founder-paradox-studios-said-050600105.html",
    label: `AmioTalio founder of Paradox Studios has said “Solana will leave Ethereum in the dust this year when it comes to gaming”`,
    source: "Yahoo Finance",
  },
  {
    url: "https://www.fxstreet.com/cryptocurrencies/news/solana-price-hits-lowest-point-in-six-months-recovery-likely-as-the-ethereum-killer-leads-in-web3-gaming-202203141524",
    label: `Solana price hits lowest point in six months, recovery likely as the Ethereum-killer leads in Web3 gaming`,
    source: "FX Street",
  },
]
