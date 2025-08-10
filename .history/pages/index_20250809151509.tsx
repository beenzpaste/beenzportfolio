import { Group, Container, SimpleGrid, Title } from "@mantine/core";
import Link from "next/link"
import Image from "next/image"
import Navbar from "../components/Navbar";
import PortfolioCard from "../components/PortfolioCard";
import { useParallax } from "../hooks/use-parallax"


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

        <div className="parallax-container">
        {/* Bean 1 - Lower z-index */}
        <Image
          src="/images/bean1.png"
          alt="Bean decoration 1"
          width={100}
          height={100}
          className="parallax-element bean1"
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
          className="parallax-element bean2"
          style={{
            transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
          }}
        />

    </>
  );
}
