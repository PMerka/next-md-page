import Image from "next/image";
import styles from "./page.module.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const myTable = `
# markdow title h1

| sdf | sdf |
|-----|-----|
| sdf | sdf |

`;

import fs from "fs";

export default function Home() {
  const data = fs.readFileSync("./example.md", "utf8");
  return (
    <main className={styles.main}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={data} />
    </main>
  );
}
