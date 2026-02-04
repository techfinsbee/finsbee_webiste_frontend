import Image from "next/image";

export default function Blocks({ blocks }) {
  return (
    <div className="space-y-10">
      {blocks.map((block, index) => {
        switch (block.__component) {
          case "shared.rich-text":
            return (
              <div
                key={index}
                className="prose"
                dangerouslySetInnerHTML={{ __html: block.body }}
              />
            );

          case "shared.quote":
            return (
              <blockquote key={index} className="border-l-4 pl-4 italic">
                <p>{block.body}</p>
                <span className="block mt-2 font-semibold">
                  — {block.title}
                </span>
              </blockquote>
            );

          case "shared.media":
            return (
              <Image
                key={index}
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${block.file}`}
                alt=""
                width={800}
                height={400}
                className="rounded-lg"
              />
            );

          case "shared.slider":
            return (
              <div key={index} className="grid grid-cols-2 gap-4">
                {block.files.map((file, i) => (
                  <Image
                    key={i}
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${file}`}
                    alt=""
                    width={400}
                    height={300}
                    className="rounded"
                  />
                ))}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
