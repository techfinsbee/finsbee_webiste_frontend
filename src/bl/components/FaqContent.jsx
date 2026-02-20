import { motion, AnimatePresence } from "framer-motion";
export default function FaqContent({ faqItems, expandedFaq, toggleFaq }) {
  return (
    <div>
      <div className="px-4 mb-4">
        <div className="text-xl font-normal text-gray-900 mb-2.5">
          Personal Loan <span className="font-bold">FAQ's</span>
        </div>
        <div
          className="w-[124px] h-px mb-[-1px]"
          style={{
            backgroundImage: "url('https://c.animaapp.com/mfnnsr9tKgXFn5/img/line-7.svg')",
          }}
        ></div>
      </div>
      {/* <div className="flex flex-col gap-2">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className={`bg-purple-50 rounded-xl overflow-hidden ${
              expandedFaq === item.id
                ? "border border-purple-300 shadow-lg shadow-purple-500/12"
                : "border border-purple-500/20"
            }`}
          >
            <button
              className="w-full px-8 py-6 bg-transparent border-none text-left text-base font-bold text-gray-600 cursor-pointer flex justify-between items-center"
              onClick={() => toggleFaq(item.id)}
            >
              <span>{item.question}</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  expandedFaq === item.id ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            {expandedFaq === item.id && item.answer && (
              <div className="px-8 pb-6 text-base font-normal text-gray-600 leading-normal">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div> */}

      {/* Right Side FAQ Accordion */}
 <div className="flex flex-col gap-2">
      {faqItems.map((item) => (
        <motion.div
          key={item.id}
          layout
          className={`border-purple-200 rounded-lg shadow-sm overflow-hidden transition-colors ${
            expandedFaq === item.id
              ? "bg-white" : "bg-transparent"
              
          }`}
          transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
        >
          {/* Header */}
          <button
            className="w-full px-8 py-6 bg-transparent border-none text-left text-base font-bold text-gray-600 cursor-pointer flex justify-between items-center"
            onClick={() => toggleFaq(item.id)}
          >
            <span
            className={`font-medium ${
            expandedFaq === item.id ? "text-purple-600" : "text-gray-700"
          }`}
            >{item.question}</span>
            <motion.svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              animate={{ rotate: expandedFaq === item.id ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <polyline points="6,9 12,15 18,9"></polyline>
            </motion.svg>
          </button>

          {/* Answer with animation */}
          <AnimatePresence>
            {expandedFaq === item.id && item.answer && (
              <motion.div
                key="answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-4 text-gray-600">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
       </div>
  );
}