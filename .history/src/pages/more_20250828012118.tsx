// pages/blog.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import styles from "../styles/Blog.module.css";

type Post = { slug: string; title: string; date: string; content: string };

function resolvePostsDir() {
  // Works whether you keep data/ at project root or under src/
  const rootData = path.join(process.cwd(), "data", "posts");
  const srcData  = path.join(process.cwd(), "src", "data", "posts");
  return fs.existsSync(rootData) ? rootData : srcData;
}

export async function getStaticProps() {
  const postsDir = resolvePostsDir();
  const filenames = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDir, filename);
      const file = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(file);
      const processed = await remark().use(html).process(content);
      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title ?? filename,
        date: data.date ?? "",
        content: processed.toString(),
      };
    })
  );

  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return { props: { posts } };
}

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      {posts.map((p) => (
        <article key={p.slug} className={styles.post}>
          <h2>{p.title}</h2>
          <p className={styles.date}>{p.date}</p>
          <div dangerouslySetInnerHTML={{ __html: p.content }} />
        </article>
      ))}
    </div>
  );
}