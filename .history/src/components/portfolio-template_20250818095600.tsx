import Image from "next/image"
import Navbar from "./Navbar"
import Footer from "./Footer"
import type { JSX } from "react"
import styles from '../styles/Portfolio.module.css';

interface PortfolioItem {
  id: number
  title: string
  subtitle: string
  slug: string
  mainImage: string
  content: string
  additionalImages: string[]
  imageGridColumns: "two-column" | "three-column" | "four-column"
}

interface PortfolioTemplateProps {
  item: PortfolioItem
}

function parseContent(content: string): JSX.Element[] {
  // Simple markdown-like parsing
  const lines = content.split("\n")
  const elements: JSX.Element[] = []
  let currentParagraph: string[] = []
  let listItems: string[] = []
  let inList = false

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(" ")
      if (text.startsWith("### ")) {
        elements.push(<h3 key={elements.length}>{text.replace("### ", "")}</h3>)
      } else {
        // Handle bold text
        const parts = text.split("**")
        const content = parts.map((part, index) =>
          index % 2 === 1 ? (
            <span key={index} className="duration">
              {part}
            </span>
          ) : (
            part
          ),
        )
        elements.push(<p key={elements.length}>{content}</p>)
      }
      currentParagraph = []
    }
  }

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length}>
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>,
      )
      listItems = []
      inList = false
    }
  }

  lines.forEach((line) => {
    const trimmed = line.trim()

    if (trimmed === "") {
      if (inList) {
        flushList()
      } else {
        flushParagraph()
      }
    } else if (trimmed.startsWith("- ")) {
      if (!inList) {
        flushParagraph()
        inList = true
      }
      listItems.push(trimmed.substring(2))
    } else {
      if (inList) {
        flushList()
      }
      currentParagraph.push(trimmed)
    }
  })

  // Flush any remaining content
  if (inList) {
    flushList()
  } else {
    flushParagraph()
  }

  return elements
}

export default function PortfolioTemplate({ item }: PortfolioTemplateProps) {
  const contentElements = parseContent(item.content)

  return (
    <>
      <Navbar />
      <div className={styles.pageContainer}>
        <div className="portfolio-template">
          <h1>{item.title}</h1>
          <h2>{item.subtitle}</h2>

          <Image
            src={item.mainImage || "/placeholder.svg"}
            alt={item.title}
            width={800}
            height={400}
            className="main-image"
          />

          <div className="content-text">{contentElements}</div>

          {item.additionalImages && item.additionalImages.length > 0 && (
            <div className={`image-grid ${item.imageGridColumns}`}>
              {item.additionalImages.map((image, index) => (
                <Image
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${item.title} additional image ${index + 1}`}
                  width={300}
                  height={200}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
