import React, { useEffect, useState, useRef } from "react";
import { FaLock } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";

import navigation from "@/src/data/navigation.json";
import Link from "next/link";

const Nav = () => {
  const [openDrawer, setDrawerOpen] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      setDrawerOpen(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <nav className="nav">
      <button
        aria-label="Navigation menu open icon"
        className="mobile-toggle"
        onClick={() => setDrawerOpen(true)}
      >
        <BiMenuAltRight />
      </button>

      <ul
        ref={drawerRef}
        className={`nav-list ${openDrawer ? "open-drawer" : ""}`}
      >
        <button
          aria-label="Navigation menu close icon"
          className="mobile-toggle"
          onClick={() => setDrawerOpen(false)}
        >
          <MdClose />
        </button>

        {
          // eslint-disable-next-line array-callback-return
          navigation["nav-items"].map((item, i) => (
            <li key={i} className={`nav-item ${item.isLocked ? "locked" : ""}`}>
              <Link
                onClick={() => setDrawerOpen(false)}
                className={`nav-link`}
                href={item.path}
                passHref
              >
                <a>{item.label}</a>
              </Link>
              {item.isLocked && (
                <span className="lock-icon">
                  <FaLock />
                </span>
              )}
            </li>
          ))
        }
      </ul>
    </nav>
  );
};
export default Nav;
