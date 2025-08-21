import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Works.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import portfolioData from "../data/portfolio-data.json"

export default function Works() {

    return (
        <>
            <Navbar />

            <div className={styles.mainContent}>
                <div className={styles.portfolioGrid}>
                    {portfolioData.portfolioItems.map((item) => (
                        <Link key={item.id} href={`/portfolio/${item.slug}`} className={styles.portfolioCard}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.cardImage}
                                    alt={`${item.title} Image`}
                                    fill   // <-- replaces width/height
                                    className={styles.portfolioCardImage}
                                />
                            </div>
                            <p className={styles.portfolioTitle}>{item.title}</p>
                            <p className={styles.portfolioSubtitle}>{item.subtitle}</p>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </>

    )
}