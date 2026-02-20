import Image from "next/image";

export default function WhyFinsbeeContent({ features }) {
  return (
    <div>
      <div className="px-4 mb-4 ">
        <div className="text-xl font-normal text-gray-900 mb-2.5">
          Why <span className="font-bold">Finsbee?</span>
        </div>
        <div
          className="w-11 h-px mb-[-1px]"
          style={{
            backgroundImage: "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7-1.svg')",
          }}
        ></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="w-[370px] h-[162px] p-4 flex flex-col gap-2">
            <Image
              className="w-12 h-12 object-cover"
              alt="Feature icon"
              src={feature.icon}
              width={48}
              height={48}
              priority={index < 3} // Prioritize first 3 images for faster loading
            />
            <div className="text-base font-bold text-gray-900 leading-5">
              {feature.title}
            </div>
            <div className="text-base font-normal text-gray-400 leading-normal">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}