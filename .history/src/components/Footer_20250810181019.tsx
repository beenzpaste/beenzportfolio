import { stylesToString } from "@mantine/core";
import styles from "../styles/Navbar.module.css";

export default function Footer() {
  return (
    <footer style={{ padding: "2rem 0"}}>
      <div style={{ alignSelf: "center", textAlign: "center" }}>
        <div className={styles.footer}>
          <p>
            with love and lint by <a href="https://beenzpocket.netlify.app/">sheena</a>
          </p>
          <p>made with <a href="https://github.com/mantinedev/next-pages-min-template">mantine next.js template</a> and hard code</p>
        </div>
      </div>
    </footer>
  )
}
