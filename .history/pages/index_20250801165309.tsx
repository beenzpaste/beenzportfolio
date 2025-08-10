import { Group, Container, SimpleGrid, Title } from "@mantine/core";
import Navbar from "../components/Navbar";
import PortfolioCard from "../components/PortfolioCard";


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

export async function getServerSideProps() {
  const STRAPI_URL = "http://localhost:1337/api";
  const headers = {
    Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
  };

  const [portfolioRes, blogRes, collectionsRes] = await Promise.all([
    fetch(`${STRAPI_URL}/portfolio-entries?populate=*`, { headers }),
    fetch(`${STRAPI_URL}/blog-posts?populate=*`, { headers }),
    fetch(`${STRAPI_URL}/collections?populate=*`, { headers }),
  ]);

  const [portfolio, blog, collections] = await Promise.all([
    portfolioRes.json(),
    blogRes.json(),
    collectionsRes.json(),
  ]);

  return {
    props: {
      portfolio: portfolio.data,
      blog: blog.data,
      collections: collections.data,
    },
  };
}

export default function IndexPage({ portfolio, blog, collections }) {
  return (
    <>
      <Group mt={50} justify="center">
        <Navbar />

        <Container size="lg" py="xl">
          <Title order={2} mb="xl">Portfolio</Title>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" verticalSpacing="xl">
            {portfolio
              .filter((entry) => entry.attributes.show)
              .map((entry) => {
                const attr = entry.attributes;
                const imageUrl = attr.titleImage?.data?.attributes?.url
                  ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${attr.titleImage.data.attributes.url}`
                  : undefined;

                return (
                  <PortfolioCard
                    key={portfolio.id}
                    title={attr.title}
                    subtitle={attr.subtitle}
                    date={attr.date}
                    imageUrl={imageUrl}
                  />
                );
              })}
          </SimpleGrid>
        </Container>

      </Group>
    </>
  );
}
