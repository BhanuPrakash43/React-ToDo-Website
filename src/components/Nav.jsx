import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <li style={{ listStyle: "none" }}>
          <Link to="/">Todo App</Link>
        </li>
      </div>
      <div className={styles.impLinks}>
        <ul className={styles.navItems}>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="completed">Completed Todos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
