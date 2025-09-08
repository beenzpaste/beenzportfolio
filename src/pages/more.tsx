import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

type PostMeta = { slug: string; title: string; date?: string; excerpt?: string };

function resolvePostsDir() {
  const rootData = path.join(process.cwd(), "data", "posts");
  const srcData  = path.join(process.cwd(), "src", "data", "posts");
  return fs.existsSync(rootData) ? rootData : srcData;
}

export async function getStaticProps() {
  const postsDir = resolvePostsDir();
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

  const posts: PostMeta[] = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const file = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data } = matter(file);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
    };
  }).sort((a, b) => (a.date! < b.date! ? 1 : -1));

  return { props: { posts } };
}

export default function BlogIndex({ posts }: { posts: PostMeta[] }) {
  return (
    <main className={styles.container}>
      <h1>Blog</h1>
      <ul className={styles.list}>
        {posts.map(p => (
          <li key={p.slug} className={styles.item}>
            <h2 className={styles.title}>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            {p.date && <p className={styles.date}>{p.date}</p>}
            {p.excerpt && <p className={styles.excerpt}>{p.excerpt}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}