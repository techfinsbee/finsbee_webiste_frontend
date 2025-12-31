export const loanEligibilityDocuments = {
  /* =========================
     BUSINESS LOAN
  ========================== */
  "business-loan": {
    eligibility: {
      "For Proprietary / Partnership Firms": [
        "Business vintage: Minimum 1 year",
        "Minimum annual turnover: ₹12 Lakhs",
        "Valid GST registration (if applicable)",
        "Owner's credit score: 700+",
      ],
      "For Private Limited Companies": [
        "Business vintage: Minimum 2 years",
        "Minimum annual turnover: ₹24 Lakhs",
        "Company and Director's KYC verification",
        "Profitable operations in recent year",
      ],
    },

    documents: {
      salaried: {
        "Business Documents": [
          "Business Registration Certificate",
          "GST Registration",
          "Business Address Proof",
        ],
        "Financial Documents": [
          "Last 2 years ITR with computation",
          "Last 6 months business bank statements",
          "Audited financial statements",
        ],
        "KYC Documents": [
          "PAN Card of Entity and Promoters",
          "Aadhaar Card of Promoters / Directors",
          "Latest Passport-size photographs",
        ],
      },
    },
  },

  /* =========================
     PERSONAL LOAN
  ========================== */
  "personal-loan": {
    eligibility: {
      "For Salaried Individuals": [
        "Age: 21–58 years",
        "Minimum monthly income: ₹15,000",
        "Employment: At least 6 months in current job",
        "Credit Score: 650+",
      ],
      "For Self-Employed Individuals": [
        "Age: 25–65 years",
        "Business vintage: Minimum 2 years",
        "Annual income: Minimum ₹3 lakhs",
        "Credit Score: 700+",
      ],
    },

    documents: {
      salaried: {
        "Identity Proof": [
          "Permanent Account Number (PAN) Card",
          "Aadhaar Card",
          "Passport-Size Photograph",
        ],
        "Address Proof": ["Aadhaar Card", "Utility Bills"],
        "Income Proof": [
          "Salary Slips (Last 3 to 6 Months)",
          "Bank Statements (Last 3 to 6 Months)",
          "Employment Proof",
        ],
      },

      selfEmployed: {
        "Identity Proof": [
          "Permanent Account Number (PAN) Card",
          "Aadhaar Card",
          "Passport-Size Photograph",
        ],
        "Business Proof": [
          "Business registration certificate",
          "Shop and Establishment License",
          "Udyam certificate",
        ],
        "Income Proof": [
          "Income Tax Returns (Last 2–3 years)",
          "Profit & Loss Statement / Balance Sheet",
          "GST Returns (if applicable)",
          "Bank Statements (Last 6 months)",
        ],
      },
    },
  },

  

  /* =========================
     LOAN AGAINST STOCK
  ========================== */
  "loan-against-stock": {
    eligibility: {
      "Eligibility Criteria": [
        "Age: 21 to 70 years",
        "Minimum Stock Portfolio Value: ₹1 lakh (market value)",
        "Eligible stocks from Nifty 500 / BSE 500 or approved list",
        "Active demat account with pledging facility",
      ],
    },

    documents: {
      salaried: {
        "Required Documents": [
          "KYC Documents: PAN, Aadhaar, address proof",
          "Latest Demat Account Statement",
          "Bank Statements (Last 3 months)",
          "Cancelled Cheque",
        ],
      },
    },
  },

  /* =========================
     LAP BALANCE TRANSFER
  ========================== */
  "lap-balance-transfer": {
    eligibility: {
      "For Salaried Individuals": [
        "Age: 25 to 65 years (at loan maturity)",
        "Minimum Monthly Income: ₹25,000",
        "Employment Stability: Minimum 2 years (1 year current org)",
        "CIBIL Score: 680+",
      ],
      "For Self-Employed Individuals": [
        "Age: 25 to 70 years (at loan maturity)",
        "Business Vintage: Minimum 3 years",
        "Annual Income: Minimum ₹6 lakhs (ITR)",
        "CIBIL Score: 700+",
      ],
    },

    documents: {
      salaried: {
        "Identity / Address Proof": [
          "Permanent Account Number (PAN) Card",
          "Aadhaar Card",
          "Passport-Size Photograph",
        ],
        "Property Documents": [
          "Sale Deed",
          "Registered Sale Agreement / Allotment Letter",
          "Approved Building Plan",
          "Latest Property Tax Receipt",
        ],
        "Income Proof": [
          "Salary Slips (Last 3 to 6 Months)",
          "Bank Statements (Last 3 to 6 Months)",
          "Employment Proof",
        ],
      },

      selfEmployed: {
        "Identity / Address Proof": [
          "Permanent Account Number (PAN) Card",
          "Aadhaar Card",
          "Passport-Size Photograph",
          "Registered Rent Agreement",
        ],
        "Business Proof": [
          "Business Registration Certificate",
          "Trade License",
          "Udyam / MSME Certificate",
          "Certificate of Incorporation",
        ],
        "Property Documents": [
          "Sale Deed",
          "Approved Building Plan",
          "Registered Sale Agreement",
          "No Encumbrance Certificate",
          "Latest Property Tax Receipt",
        ],
        "Income Proof": [
          "ITR (Last 2–3 years)",
          "Audited P&L and Balance Sheet",
          "Tax Audit Report (if applicable)",
          "Bank Statements (Last 6–12 months)",
        ],
      },
    },
  },

  /* =========================
   LOAN AGAINST PROPERTY
========================== */
"loan-against-property": {
  eligibility: {
    "For Salaried Individuals": [
      "Age: 25 to 65 years (at loan maturity)",
      "Minimum Monthly Income: ₹25,000",
      "Employment Stability: At least 2 years of continuous employment, with a minimum of 1 year in the current organization",
      "CIBIL Score: 680+",
    ],

    "For Self-Employed Individuals": [
      "Age: 25 to 70 years (at loan maturity)",
      "Business Vintage: Minimum 3 years of continuous operation",
      "Annual Income: Minimum ₹6 lakhs (ITR)",
      "CIBIL Score: 700+",
    ],
  },

  documents: {
    salaried: {
      "Identity / Address Proof": [
        "Permanent Account Number (PAN) Card",
        "Aadhaar Card",
        "Passport-Size Photograph",
      ],

      "Property Documents (for the property being mortgaged)": [
        "Sale Deed",
        "Registered Sale Agreement or Allotment Letter",
        "Approved Building Plan (for under-construction property)",
        "Latest Property Tax Receipt",
      ],

      "Income Proof": [
        "Salary Slips (Last 3 to 6 Months)",
        "Bank Statements (Last 3 to 6 Months)",
        "Employment Proof: Employee ID Card or Appointment Letter",
      ],
    },

    selfEmployed: {
      "Identity / Address Proof": [
        "Permanent Account Number (PAN) Card",
        "Aadhaar Card",
        "Passport-Size Photograph",
        "Registered Rent Agreement",
      ],

      "Business Proof": [
        "Business registration certificate",
        "Trade License",
        "Udyam Registration or MSME Certificate",
        "Certificate of Incorporation (for companies)",
      ],

      "Property Documents (for the property being mortgaged)": [
        "Sale Deed",
        "Approved Building Plan",
        "Registered Sale Agreement or Allotment Letter",
        "No Encumbrance Certificate",
        "Latest Property Tax Receipt",
      ],

      "Income Proof": [
        "Last 2–3 years’ Income Tax Returns (ITR) with computation",
        "Audited Profit & Loss Statement and Balance Sheet (CA certified)",
        "Tax Audit Report (if applicable)",
        "Last 6–12 months’ current account and savings account bank statements",
      ],
    },
  },
},


  /* =========================
     LOAN AGAINST MUTUAL FUND
  ========================== */
  "loan-against-mutual-fund": {
    eligibility: {
      "Eligibility Criteria": [
        "Age: 21–70 years",
        "Minimum Mutual Fund value: ₹1 lakh",
        "Investment holding period: Minimum 6 months",
        "Eligible MF types: Equity, Debt, Hybrid, ETFs",
      ],
    },

    documents: {
      salaried: {
        "Required Documents": [
          "KYC documents (PAN, Aadhaar, address proof)",
          "Latest Mutual Fund Statements",
          "Bank Statements (Last 3 months)",
        ],
      },
    },
  },

  /* =========================
     INVOICE DISCOUNTING
  ========================== */
  "invoice-discounting": {
    eligibility: {
      "Business Type": [
        "Registered Proprietorship, Partnership, or Private Limited entity",
      ],
      "Business Vintage": [
        "Minimum 12 years of continuous business operations",
      ],
      "Customer Credit Quality": [
        "Invoices from customers with strong payment history",
      ],
      "Minimum Turnover": [
        "Minimum annual turnover of ₹10 Lakhs",
      ],
    },

    documents: {
      salaried: {
        "Required Documents": [
          "Valid Business Registration (GST / Shop & Establishment)",
          "Latest ITR / Financial Statements",
          "Bank Statements (Last 3–6 months)",
          "KYC Documents of business and signatories",
        ],
      },
    },
  },

  /* =========================
     HOME LOAN
  ========================== */
  "home-loan": {
    eligibility: {
      "For Salaried Individuals": [
        "Age: 21–60 years",
        "Minimum Monthly Income: ₹25,000",
        "Employment Stability: Minimum 1 year",
        "CIBIL Score: 700+",
      ],
      "For Self-Employed Individuals": [
        "Age: 23–65 years",
        "Business Vintage: 3–5 years",
        "Minimum Annual Income: ₹3–5 Lakhs",
        "CIBIL Score: 700+",
      ],
    },

    documents: {
      salaried: {
        "Identity / Address Proof": [
          "PAN Card",
          "Aadhaar Card",
          "Passport-Size Photographs",
          "Rent Agreement",
        ],
        "Property Documents": [
          "Sale Agreement / Allotment Letter",
          "Title Deed Copy",
          "Approved Building Plan",
        ],
        "Income Proof": [
          "Salary Slips (Last 3 to 6 Months)",
          "Bank Statements (Last 3 to 6 Months)",
          "Form 16 / ITR",
          "Employee ID / Appointment Letter",
        ],
      },

      selfEmployed: {
        "Identity Proof": [
          "PAN Card",
          "Aadhaar Card",
          "Passport-Size Photographs",
          "Rent Agreement (if applicable)",
        ],
        "Business Proof": [
          "GST Registration Certificate",
          "Business Registration Certificate",
          "Udyam Registration",
        ],
        "Income Proof": [
          "ITR (Last 2–3 years)",
          "Profit & Loss / Balance Sheet",
          "GST Returns (if applicable)",
          "Bank Statements (Last 6 months)",
        ],
        "Property Documents": [
          "Agreement to Sale / Allotment Letter",
          "Approved Building Plan",
          "Property Tax Receipts",
        ],
      },
    },
  },
};
