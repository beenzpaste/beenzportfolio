import { stylesToString } from "@mantine/core";
import styles from "../styles/about.module.css";

export default function Footer() {
  return (
    <footer style={{ padding: "2rem 0"}}>
      <div style={{ alignSelf: "center", textAlign: "center" }}>
        <div className={styles.footer}>
          <p>
            With love and lint by <a href="https://beenzpocket.netlify.app/">sheena</a>
          </p>
          <p style={{ marginTop: "0.5rem", fontSize: "0.9rem" }}>made with <a href="https://github.com/mantinedev/next-pages-min-template">mantine next.js template</a> and hard code</p>
        </div>
      </div>
    </footer>
  )
}
