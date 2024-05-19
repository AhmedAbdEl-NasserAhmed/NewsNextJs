import Link from "next/link";
import styles from "./MainHeader.module.css";
import NavLink from "./NavLink";

function MainHeader() {
  return (
    <header id="main-header" className={styles.header}>
      <div id="logo">
        <Link href="/">Next News</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news" children="News" />
          </li>
          <li>
            <NavLink href="/archive" children="Archive" />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
