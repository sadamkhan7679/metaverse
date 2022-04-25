// libs
import React, { useState } from "react";

// Components
import Seo from "../Seo";
import Timer from "./Timer";
import Text from "./Text";
import Socials from "./Socials";

import City from "./City";
import Logo from "./Logo";
import Ape from "./Ape";
import Portal from "./Portal";

const App = () => {
  const [isExpired, setExpired] = useState(false);
  const onTimerExpiry = () => setExpired(true);

  return (
    <section className="frame">
      <Seo title="The Paradox Metaverse" />
      <City />
      <Portal />
      <Ape />
      <div className={`content ${isExpired ? "timer-expired" : ""}`}>
        <Logo />
        {/* month index is 0 based | for GMT+1 (London timezone) set UTC hour-1 */}
        {!isExpired && (
          <Timer
            onExpire={onTimerExpiry}
            expiryTimestamp={new Date(Date.UTC(2022, 4 - 1, 18, 11 - 1, 0, 0))}

            // testing
            // expiryTimestamp={new Date(Date.UTC(2022, 4 - 1, 16, 14 - 1, 35, 0))}
          />
        )}
        <Text />
      </div>
      <Socials />
    </section>
  );
};

export default App;
