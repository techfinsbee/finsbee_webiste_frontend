import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

export async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkGfm)              // ✅ lists, links, numbering
    .use(remarkRehype, {
      allowDangerousHtml: true,  // ✅ allow inline HTML
    })
    .use(rehypeRaw)              // ✅ parse inline HTML
    .use(rehypeStringify)        // ✅ HTML output
    .process(markdown);

  return result.toString();
}
