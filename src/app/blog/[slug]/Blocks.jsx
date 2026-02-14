// import Image from "next/image";

// export default function Blocks({ blocks }) {
//   return (
//     <div className="space-y-10">
//       {blocks.map((block, index) => {
//         switch (block.__component) {
//           case "shared.rich-text":
//             return (
//               <div
//                 key={index}
//                 className="prose"
//                 dangerouslySetInnerHTML={{ __html: block.body }}
//               />
//             );

//           case "shared.quote":
//             return (
//               <blockquote key={index} className="border-l-4 pl-4 italic">
//                 <p>{block.body}</p>
//                 <span className="block mt-2 font-semibold">
//                   — {block.title}
//                 </span>
//               </blockquote>
//             );

//           case "shared.media":
//             return (
//               <Image
//                 key={index}
//                 src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${block.file}`}
//                 alt=""
//                 width={800}
//                 height={400}
//                 className="rounded-lg"
//               />
//             );

//           case "shared.slider":
//             return (
//               <div key={index} className="grid grid-cols-2 gap-4">
//                 {block.files.map((file, i) => (
//                   <Image
//                     key={i}
//                     src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${file}`}
//                     alt=""
//                     width={400}
//                     height={300}
//                     className="rounded"
//                   />
//                 ))}
//               </div>
//             );

//           default:
//             return null;
//         }
//       })}
//     </div>
//   );
// }


import { markdownToHtml } from "@/app/lib/markdownToHtml";
import Image from "next/image";

export default async function Blocks({ blocks }) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <div className="space-y-12">
      {await Promise.all(
        blocks.map(async (block, index) => {
          switch (block.__component) {
            case "shared.rich-text": {
              const html = await markdownToHtml(block.body);

              return (
                <div
                  key={index}
                  className="
                    prose 
                    max-w-none
                    prose-h1:text-3xl
                    prose-h2:text-2xl
                    prose-h3:text-xl
                    prose-h1:font-bold
                    prose-h2:font-bold
                    prose-h3:font-semibold
                    prose-h2:mt-10
                    prose-h2:mb-4
                    prose-p:leading-7
                    prose-p:mb-4
                    prose-ul:list-disc
                    prose-ol:list-decimal
                    prose-li:ml-6
                    prose-a:text-blue-600
                    prose-a:underline
                  "
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            }

            case "shared.media":
              return (
                <Image
                  key={index}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${block.file}`}
                  alt=""
                  width={900}
                  height={500}
                  className="rounded-lg my-6"
                />
              );

            case "shared.quote":
              return (
                <blockquote
                  key={index}
                  className="border-l-4 pl-4 italic text-gray-700"
                >
                  <p>{block.body}</p>
                  {block.title && (
                    <footer className="mt-2 font-semibold">
                      — {block.title}
                    </footer>
                  )}
                </blockquote>
              );

            default:
              return null;
          }
        })
      )}
    </div>
  );
}
