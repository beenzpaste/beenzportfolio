import { stylesToString } from "@mantine/core";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ padding: "2rem 0"}}>
      <div style={{ alignSelf: "center", textAlign: "center" }}>
        <div className={styles.footer}>
          <p style={{margin: 0, fontStyle:"italic"}}>
            with love and lint by <Link href="https://beenzpocket.netlify.app/">sheena</Link>
          </p>
          <p className={styles.footerSub}>made with <Link href="https://github.com/mantinedev/next-pages-min-template">mantine next.js template</Link> and hard code</p>
        </div>
      </div>
    </footer>
  )
}
