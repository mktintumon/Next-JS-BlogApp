"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";

export default function Links({session}) {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const [open, setOpen] = useState(false);

  //const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}

        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>


      {/* MOBILE PART */}
      <button className={styles.menuButton} onClick={()=>setOpen((prev)=>!prev)}>Menu</button>
      {
        open && (
          <div className={styles.mobileLinks}>
              {
                links.map((link)=>(
                  <NavLink key={link.title} item={link} />
                ))
              }
          </div>
        )
      }
    </div>
  );
}
