import React from 'react';
import HomeHeader from "./Home/HomeHeader";
const FAQs = () => {
  const dropdownData = [
    
    { title: "Loans", link: "loan-section-home" },
    // { title: " ", link: "mart-home" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact Us", link: "contact-us" },
  ];
  const faqData = [
    {
      id: 1,
      title: "About FinsBee",
      questions: [
        {
          id: "Q1",
          question: "What is FinsBee?",
          answer: "FinsBee is a digital lending platform that connects consumers with banks and NBFCs to provide hassle-free personal loans. We also offer an in-app e-commerce marketplace, Mama Mart, where users can redeem coins earned from loan transactions."
        },
        {
          id: "Q2",
          question: "How is FinsBee different from other loan providers?",
          answer: (
            <ul className="list-disc pl-5 space-y-1">
              <li>Quick loan approval and disbursal</li>
              <li>Wide range of loan options</li>
              <li>No physical paperwork—100% digital process</li>
              <li>Unique coin-based reward system for borrowers</li>
              <li>Exclusive Mama Mart marketplace for shopping with coins</li>
            </ul>
          )
        },
        {
          id: "Q3",
          question: "Is FinsBee an NBFC or a bank?",
          answer: (<p>No, FinsBee is not an NBFC or a bank. We are a lending aggregator that partners with registered NBFCs and banks to facilitate loans for consumers. <a href='/lending-partners' style={{color:"#ffc73c", fontWeight:"600"}}>Click Here </a> to see our lending partners.</p>)
        }
      ]
    },
    {
      id: 2,
      title: "Loan Application & Eligibility",
      questions: [
        {
          id: "Q4",
          question: "What types of loans does FinsBee offer?",
          answer: (
            <>
              <p>We provide multiple loan options, including:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Personal Loans (for any personal expense)</li>
                <li>Instant Payday Loans (short-term emergency loans)</li>
                <li>Loan Against Property (LAP)</li>
                <li>Loan Against Securities</li>
                <li>Home Loans</li>
              </ul>
            </>
          )
        },
        {
          id: "Q5",
          question: "Who can apply for a loan on FinsBee?",
          answer: (
            <>
              <p>To be eligible for a loan, you must:</p>
              <ul className="pl-5 space-y-1 mt-2">
                <li>✔ Be an Indian citizen</li>
                <li>✔ Be at least 21 years old (age may vary by lender)</li>
                <li>✔ Have a stable source of income (salaried or self-employed)</li>
                <li>✔ Have a valid PAN card, Aadhaar, and bank account</li>
              </ul>
            </>
          )
        },
        {
          id: "Q6",
          question: "What documents are required?",
          answer: (
            <>
              <p>The basic documents required are:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>PAN Card Number</li>
                <li>Bank Statements (last 3-6 months)</li>
                <li>Salary Slips (for salaried applicants)</li>
              </ul>
            </>
          )
        },
        {
          id: "Q7",
          question: "Do I need a high credit score to get a loan?",
          answer: "A good credit score improves your chances of approval, but we also have lenders who provide loans to people with low or no credit history."
        },
        {
          id: "Q8",
          question: "Can I apply for multiple loans at the same time?",
          answer: "Yes, you can apply for multiple loans, but approval depends on your repayment capacity and creditworthiness."
        }
      ]
    },
    {
      id: 3,
      title: "Loan Approval & Disbursal",
      questions: [
        {
          id: "Q9",
          question: "How long does it take to get a loan approved?",
          answer: "Loan approval is quick and usually takes between 10 minutes to 7 days, depending on the lender and the type of loan."
        },
        {
          id: "Q10",
          question: "How is the loan amount disbursed?",
          answer: "Once approved, the loan amount is directly transferred to your registered bank account within a few hours to 24 hours."
        },
        {
          id: "Q11",
          question: "Can I track my loan application status?",
          answer: "Yes! You can track your loan status on the FinsBee app under the \"My Loans\" section in the \"Your Profile\" page."
        }
      ]
    },
    {
      id: 4,
      title: "Loan Repayment & Interest Rates",
      questions: [
        {
          id: "Q12",
          question: "What is the interest rate for loans?",
          answer: "Interest rates vary based on many factors like the lender, loan type, loan tenure, your credit score, etc."
        },
        {
          id: "Q13",
          question: "What is the repayment tenure for loans?",
          answer: "Repayment periods range from 1 month to 60 months, depending on the loan type, loan amount and lender's policies."
        },
        {
          id: "Q14",
          question: "Where do I repay my loan?",
          answer: "The loan repayment will be managed and processed directly on the platform of the respective lender who disbursed the loan."
        },
        {
          id: "Q15",
          question: "Are there any late payment charges?",
          answer: "Yes, if you miss an EMI, late payment charges apply. Charges vary by lender and will be mentioned in your loan agreement."
        }
      ]
    },
    {
      id: 5,
      title: "Mama Mart & Coin System",
      questions: [
        {
          id: "Q16",
          question: "What is Mama Mart?",
          answer: "Mama Mart is FinsBee's in-app e-commerce store where you can redeem coins earned from loan transactions to shop for various products."
        },
        {
          id: "Q17",
          question: "How does the coin system work?",
          answer: (
            <ul className="list-disc pl-5 space-y-1">
              <li>You earn coins when you take a loan.</li>
              <li>Coins can be used to purchase items on Mama Mart.</li>
              <li>You can combine coins with cash if you don't have enough to buy a product.</li>
            </ul>
          )
        },
        {
          id: "Q18",
          question: "Can I transfer my coins to someone else?",
          answer: "Currently, coins are non-transferable and can only be used on Mama Mart. However, they may soon be redeemable as real money in the user's bank account."
        }
      ]
    },
    {
      id: 6,
      title: "Security & Privacy",
      questions: [
        {
          id: "Q19",
          question: "Is it safe to apply for a loan through FinsBee?",
          answer: "Yes, FinsBee uses bank-grade encryption to protect your personal and financial data. We do not store sensitive payment information."
        },
        {
          id: "Q20",
          question: "Will my data be shared with third parties?",
          answer: "Your data is only shared with lending partners for loan processing and is not sold or misused. We follow strict data protection policies."
        }
      ]
    },
    {
      id: 7,
      title: "Customer Support",
      questions: [
        {
          id: "Q21",
          question: "How can I contact FinsBee for support?",
          answer: (
            <>
              <p>You can reach us through:</p>
              <ul className="pl-5 space-y-1 mt-2">
                <li>📧 Email: support@finsbee.com</li>
                <li>📞 Phone: +91 97117 11026</li>
              </ul>
            </>
          )
        },
        {
          id: "Q22",
          question: "What should I do if my loan is rejected?",
          answer: (
            <>
              <p>If your loan is rejected, you can:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Work on improving your credit score before reapplying</li>
                <li>Choose a lower loan amount</li>
              </ul>
            </>
          )
        }
      ]
    }
  ];

  return (
    <>
    <HomeHeader
          dropdownData={dropdownData}
          COLOR="#fff"
          Hover="home"
          TXTCOLOR="#"
        ></HomeHeader>
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-[#000] mb-2">Frequently Asked Questions (FAQs)</h1>
        <p className="text-gray-700">Find answers to common questions about FinsBee and our services</p>
      </div>

      <div className="space-y-8">
        {faqData.map((section) => (
          <div key={section.id} className="border rounded-lg overflow-hidden">
            <div className="bg-blue-100 p-4 border-b">
              <h2 className="text-xl font-semibold text-[#ffc73c]">{section.id}. {section.title}</h2>
            </div>
            
            <div className="bg-white divide-y">
              {section.questions.map((item) => (
                <div key={item.id} className="p-4">
                  <h3 className="text-lg font-medium text-[#ffc73c] mb-2">{item.id}. {item.question}</h3>
                  <div className="text-gray-700">{item.answer}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">Still have questions?</h3>
        <p className="text-gray-700 mb-4">If you need further assistance, feel free to contact our customer support team. We're happy to help! 😊</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-medium">
          Contact Support
        </button>
      </div>
    </div>
    </>
  );
};

export default FAQs;