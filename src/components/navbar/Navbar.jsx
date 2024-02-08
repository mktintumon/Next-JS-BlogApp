import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";

export default async function Navbar() {
  const session = await auth();
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Mohit's Blog</Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
  );
}
