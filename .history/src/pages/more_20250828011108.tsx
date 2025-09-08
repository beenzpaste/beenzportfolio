import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import styles from "../styles/Blog.module.css";

type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

type Props = {
  posts: Post[];
};

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDir);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDir, filename);
      const file = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(file);

      const processed = await remark().use(html).process(content);
      const contentHtml = processed.toString();

      return {
        slug: filename.replace(/\\.md$/, ""),
        title: data.title,
        date: data.date,
        content: contentHtml,
      };
    })
  );

  // newest first
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  return { props: { posts } };
}

export default function Blog({ posts }: Props) {
  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.slug} className={styles.post}>
          <h2>{post.title}</h2>
          <p className={styles.date}>{post.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}