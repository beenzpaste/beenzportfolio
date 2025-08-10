import { Group, Container, SimpleGrid, Title } from "@mantine/core";
import Link from "next/link"
import Image from "next/image"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import PortfolioCard from "../components/PortfolioCard";
import { useParallax } from "../../hooks/use-parallax"
import portfolioData from "../../data/portfolio-data.json"
import styles from "../styles/Home.module.css";


interface PortfolioEntry {
  id: number;
  attributes: {
    title: string;
    subtitle?: string;
    date: string;
    show: boolean;
    titleImage?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

interface IndexPageProps {
  portfolio: PortfolioEntry[];
  blog: any[];
  collections: any[];
}


export default function IndexPage() {
  const scrollY = useParallax()

  return (
    <>
      <Navbar />

      <div className={styles.parallaxContainer}>
        {/* Bean 1 - Lower z-index */}
        <Image
          src="/images/bean1.png"
          alt="Bean decoration 1"
          width={120}
          height={120}
          className={`${styles.bean1} ${styles.parallaxElement}`}
          style={{
            transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.05}deg)`,
          }}
        />

        {/* Bean 2 - Higher z-index */}
        <Image
          src="/images/bean2.png"
          alt="Bean decoration 2"
          width={150}
          height={150}
          className={`${styles.bean2} ${styles.parallaxElement}`}
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />
        <div className={styles.mainContent}>
          <div className={styles.pageContainer}>
            <h1 className={styles.heroTitle}>Hsin (Sheena) Chiang</h1>
            <p className={styles.heroSubtitle}>Electrical Engineering B.S. (In Progress)</p>

            <div className={styles.portfolioGrid}>
              {portfolioData.portfolioItems.map((item) => (
                <Link key={item.id} href={`/portfolio/${item.slug}`} className={styles.portfolioCard}>
                  <Image
                    src={`/images/${item.id}.png`}
                    alt={`${item.title} Image`}
                    width={200}
                    height={100}
                    fill={true}
                    placeholder={"blur"}
                    className={styles.portfolioCardImage}
                  />
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>


      <Footer />

    </>
  )
}
