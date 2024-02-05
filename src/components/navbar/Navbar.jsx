import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Mohit's Blog</Link>
      <div>
        <Links />
      </div>
    </div>
  );
}
