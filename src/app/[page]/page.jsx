import React from "react";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
  const filenames = fs.readdirSync("./content/articles/");
  const mdFiles = filenames.filter((name) => name.endsWith(".md"));
  const params = mdFiles.map((fileName) => {
    return { page: fileName.slice(0, -3) };
  });
  console.log(params);
  return params;
}

export default function page({ params }) {
  const data = fs.readFileSync(`./content/articles/${params.page}.md`, "utf8");
  return (
    <div>
      {JSON.stringify(params)}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
    </div>
  );
}
