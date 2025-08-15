import { notFound } from "next/navigation"
import PortfolioTemplate from "../components/portfolio-template"
import portfolioData from "../data/portfolio-data.json"

interface PageProps {
  params: {
    slug: string
  }
}

export default function PortfolioDetailPage({ params }: PageProps) {
  const item = portfolioData.portfolioItems.find((item) => item.slug === params.slug)

  if (!item) {
    notFound()
  }

  return <PortfolioTemplate item={item} />
}

export async function generateStaticParams() {
  return portfolioData.portfolioItems.map((item) => ({
    slug: item.slug,
  }))
}
