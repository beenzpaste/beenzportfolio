import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import PortfolioTemplate from "../components/portfolio-template"
import portfolioData from "../data/portfolio-data.json"

type Work = {
  id: number;
  title: string;
  subtitle?: string;
  slug: string;
  mainImage: string;
  additionalImages?: string[];
  imageGridColumns: "two-column" | "three-column" | "four-column"
  // add any other fields you use in WorkTemplate
};

type Props = { work: Work };

export default function WorkPage({ work }: Props) {
  return (
    <>
      <Head>
        <title>{work.title} — Works</title>
        <meta name="description" content={work.subtitle ?? work.title} />
      </Head>
      <PortfolioTemplate work={work} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const items = works as Work[];
  const paths = items.map((w) => ({ params: { slug: w.slug } }));

  return { paths, fallback: false }; // set to 'blocking' if you plan to add items later without rebuilding
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const items = works as Work[];
  const slug = params?.slug as string;
  const work = items.find((w) => w.slug === slug);

  if (!work) return { notFound: true };

  return { props: { work } };
};