import { GetStaticPaths, GetStaticProps } from 'next';
import PortfolioTemplate from '@/components/PortfolioTemplate';
import data from '@/data/portfolio.json';

export interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  slug: string;
  mainImage: string;
  content: string;
  additionalImages: string[];
  imageGridColumns: 'two-column' | 'three-column' | 'four-column';
}

type Props = { item: PortfolioItem };

export default function PortfolioSlugPage({ item }: Props) {
  return <PortfolioTemplate item={item} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = data as PortfolioItem[];
  return {
    // prebuild each slug
    paths: items.map((item) => ({ params: { slug: item.slug } })),
    fallback: false, // set 'blocking' if you plan to add JSON items after build
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const items = data as PortfolioItem[];
  const slug = params?.slug as string;
  const item = items.find((w) => w.slug === slug);

  if (!item) return { notFound: true };
  return { props: { item } };
};