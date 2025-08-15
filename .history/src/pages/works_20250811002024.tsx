import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import portfolioData from "../data/portfolio-data.json"

export default function Works() {

    return(

        <div className={styles.portfolioGrid}>
        {portfolioData.portfolioItems.map((item) => (
            <Link key={item.id} href={`/portfolio/${item.slug}`} className={styles.portfolioCard}>
                <Image
                    // src={`/images/${item.id}.png`}
                    src={item.mainImage}
                    alt={`${item.title} Image`}
                    width={300}
                    height={180}
                    className={styles.portfolioCardImage}
                />
                {/* {item.title} */}
            </Link>
        ))}
    </div>

    )
}