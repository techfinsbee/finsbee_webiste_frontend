// app/blog/[slug]/BlockContent.jsx
import Link from "next/link";
import React from "react";

export default function BlockContent({ content }) {
  if (!content || !Array.isArray(content)) return null;

  return (
    <div
  className="
    prose max-w-none

    prose-h1:text-4xl
    prose-h1:font-bold
    prose-h1:leading-tight

    prose-h2:text-3xl
    prose-h2:font-semibold
    prose-h2:mt-8

    prose-h3:text-2xl
    prose-h3:font-semibold
  "
>

      {content.map((node, index) => {
        switch (node.type) {
          case "heading": {
            const Tag = `h${node.level || 2}`;
            return (
              <Tag key={index}>
                {node.children?.map(renderChild)}
              </Tag>
            );
          }

          case "paragraph":
            return (
              <p key={index}>
                {node.children?.map(renderChild)}
              </p>
            );

          case "list": {
            const ListTag = node.format === "ordered" ? "ol" : "ul";
            return (
              <ListTag key={index}>
                {node.children?.map((item, i) => (
                  <li key={i}>
                    {item.children?.map(renderChild)}
                  </li>
                ))}
              </ListTag>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}

/* ---------- Inline text renderer ---------- */
function renderChild(child, index) {
  if (child.type === "text") {
    let content = child.text;

    if (child.bold) content = <strong>{content}</strong>;
    if (child.italic) content = <em>{content}</em>;
    if (child.underline) content = <u>{content}</u>;

    return <React.Fragment key={index}>{content}</React.Fragment>;
  }

  if (child.type === "link") {
    return (
      <Link
        key={index}
        href={child.url}
        className="text-blue-600 underline"
        target={child.target || "_self"}
      >
        {child.children?.map(renderChild)}
      </Link>
    );
  }

  return null;
}
