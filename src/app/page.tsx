import Image from "next/image";
import styles from "./page.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";

export default function Home() {
  const data = fs.readFileSync("./content/example.md", "utf8");
  return (
    <main className={styles.main}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
    </main>
  );
}
