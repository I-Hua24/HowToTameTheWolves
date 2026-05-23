// path: app/components/Header.tsx

import Link from "next/link";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <Link href="/">
        <h1 className={style.h1}>Garden of Constellations</h1>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>

      


    </header>
  );
}