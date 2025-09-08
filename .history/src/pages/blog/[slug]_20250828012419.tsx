import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Head from "next/head";
import styles from "../../styles/Blog.module.css";

function resolvePostsDir() {
  const rootData = path.join(process.cwd(), "data", "posts");
  const srcData  = path.join(process.cwd(), "src", "data", "posts");
  return fs.existsSync(rootData) ? rootData : srcData;
}

export async function getStaticPaths() {
  const postsDir = resolvePostsDir();
  const slugs = fs.readdirSync(postsDir)
    .filter(f => f.endsWith(".md"))
    .map(f => f.replace(/\.md$/, ""));
  return { paths: slugs.map(slug => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const postsDir = resolvePostsDir();
  const file = fs.readFileSync(path.join(postsDir, `${params.slug}.md`), "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);
  return {
    props: {
      title: data.title ?? params.slug,
      date: data.date ?? "",
      html: processed.toString(),
      excerpt: data.excerpt ?? "",
    },
  };
}

export default function PostPage({
  title, date, html: htmlContent,
}: { title: string; date?: string; html: string }) {
  return (
    <main className={styles.container}>
      <Head><title>{title}</title></Head>
      <article className={styles.post}>
        <h1>{title}</h1>
        {date && <p className={styles.date}>{date}</p>}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </main>
  );
}