import React from 'react';
// import Header from './Header';
import Navbar from './Navbar/Navbar';
const PrivacyPage = () => {
  const dropdownData = [
    
    { title: "Loans", link: "loan-section-home" },
    { title: "MamaMart", link: "mart-home" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact Us", link: "contact-us" },
  ];
  return (
    <>
         <Navbar
        dropdownData={dropdownData}
        COLOR="#fff"
        Hover="home"
        TXTCOLOR="#"
      />

    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 text-gray-800">
        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-justify">
            This Privacy Policy (hereinafter referred to as "Policy") is in accordance with the Information Technology Act, 2000, the Information Technology
            (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011, and applicable RBI guidelines and regulations
            and describes the information collected from you (hereinafter referred to as "You", "Your" or "User") on Your visit to the Platform(defined further)
            and use of Platform; manner and procedure of collection of such information; use, storage, and disclosure of information collected; rights and choices
            available to You with respect to the information collected; and how Stradex International Private Limited (hereinafter "FundsMama", "We", "Us")
            including online platform(s) "store.fundsmama.com" and "FundsMama" (Mobile Application) (Collectively "Platform").
          </p>
          <p className="text-justify">
            This Policy constitutes a legal agreement between You as the User of the Platform, and Stradex International Private Limited as the owner of the
            Platform. For clarity, User shall mean any person, who visits, uses and/or transacts through the Platform. You are permitted to use the Services
            available on the Platform only if you are a natural person, a citizen of India, and at least eighteen (18) years of age.
          </p>
          <p className="text-justify">
            By visiting or accessing the Platform and voluntarily providing Us with information, including, but not limited to, personal information and
            sensitive personal information, you are consenting to Our use of the information in accordance with this Policy.
          </p>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">Disclaimer:</h2>
          <p className="text-justify">
            We reserve the right to modify this Policy at any time and update this Policy from time to time, so please review this Policy frequently to
            understand the latest policy adopted by Us. Changes and modifications to this Policy will take effect immediately upon posting on the Platform.
            Any continued use of the Services shall signify Your acceptance of such updated Policy.
          </p>
          <p className="font-bold mt-4 text-center">
            IF YOU DO NOT AGREE WITH THE TERMS AND CONDITIONS OF THIS POLICY, PLEASE DO NOT USE OR ACCESS THIS PLATFORM.
          </p>
        </section>

        {/* Collection and Storage */}
        <section>
          <h2 className="text-xl font-semibold mb-3">I. Collection and Storage of Personal Information:</h2>
          <p className="text-justify">
          Personal Information collected from the Users is securely stored at servers located in India by Stradex International Private Limited. We use reasonable safeguards to preserve the veracity and security of the information collected against loss, theft, unauthorized access, disclosure, reproduction, use or amendment. To achieve the same, we use reasonable security practices and procedures as mandated under applicable laws for the protection of your information. However, you understand and accept that there’s no guarantee that data transmission over the Internet will be completely secure and that any information that You transmit to Us is at Your own risk. We assume no liability for any disclosure of information due to transmission errors, unauthorized third-party access to our Platform and databases, or other acts of third parties, or acts or omissions beyond our reasonable control and You shall not be entitled to hold FundsMama responsible for any breach of security.
          </p>
        </section>

        {/* Personal Information Collected */}
        <section>
          <h2 className="text-xl font-semibold mb-3">II. Personal Information Collected:</h2>
          <p className="mb-4">In order to provide you with a smooth and secure journey on our Platform, we collect your personal information including but not limited to the following:</p>
          <div className="ml-4 space-y-2">
            <p>
              All information uploaded by the User on our Platform at the time of registration. This includes your personal information like first name,
              last name, email address, date of birth, mobile number, address with PIN Code.
            </p>
            <p>
              FundsMama is a Digital Fintech Marketplace that has partnered with verified lenders to facilitate their lending business. FundsMama helps
              its users to connect with these verified lenders thereby enabling You to avail products offered by the Lending Partners such as loans and
              credit cards among other financial products, which shall vary from partner to partner.
            </p>
            <p className="font-semibold">We collect the following information from You with Your explicit consent for processing your loan application:</p>
            <ul className="list-disc ml-8 space-y-1">
              <li>Education details</li>
              <li>Details of parents</li>
              <li>House ownership details</li>
              <li>Salary account details</li>
              <li>Name of the bank where You have a primary account</li>
              <li>Details regarding Your employment, comprising of years of experience</li>
              <li>Details of income</li>
              <li>Name of the current and previous employers</li>
              <li>Details regarding the years/months completed with the current employer</li>
              <li>KYC: We shall seek a 'one-time access" of the camera for selfies/photos for KYC and collect KYC documents</li>
              <li>Any other information as required by the verified lenders</li>
            </ul>
          </div>
        </section>

        {/* Disclosure Section */}
        <section>
          <h2 className="text-xl font-semibold mb-3">III. Disclosure / Sharing of Personal Information:</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. With Lending Partners:</h3>
              <p className="text-justify">
                Personal Information collected from You is shared with our verified lenders for the purpose of completing your application. We shall collect
                information for application processing as mentioned in this Clause upon seeking Your "explicit consent"
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Marketing and Promotional Purpose:</h3>
              <p className="text-justify">
              At the time of registering on the Platform, Users have to provide their mobile number and email address for OTP. Hence, by registering you authorize the FundsMama (including its verified lenders and affiliates) to send texts and email alerts to you with your login details and any other service requirements, including promotional mails and SMS, even if you have registered yourself under DND or DNC or NCPR services. Your authorization shall be valid salon as your account is not deactivated or unless you withdraw your consent. If You wish to withdraw your consent, please feel free to reach out to <a href="mailto:customercare@fundsmama.com">customercare@fundsmama.com</a> requesting the same.  
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Disclosure to Third Parties:</h3>
              <p className="text-justify">
                We do not share your Personal Information with any third parties for commercial purposes which is contrary to, or otherwise violates this,
                Policy. Notwithstanding the foregoing, we may share the information collected with our verified lenders, Affiliates, employees, and Service
                Providers, for the purposes as set forth in this Policy.
              </p>
            </div>
          </div>
        </section>

        {/* Withdrawal of Consent */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Withdrawal of Consent:</h2>
          <p className="text-justify">
            FundsMama respects Your rights over your Personal Information. If during any time, you feel that we do not require the retention of your
            personal information or if you ask us to delete or remove your personal information, we shall do the same without asking any further questions.
            Please feel free to write to <a href="mailto:customercare@fundsmama.com">customercare@fundsmama.com</a>  for such withdrawal.
          </p>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Data Security:</h2>
          <p className="text-justify">
          FundsMama understands the importance of one’s personal information and thereby always uses the highest applicable standard to protect the information collected from You. We have put in place appropriate security measures to deal with any suspected data security breach. However, Users are aware that no information transmitted over the internet is safe and there is always a chance of breach of such data even when the highest security is in place. Therefore, we cannot guarantee its absolute security. Further, you are responsible for maintaining the confidentiality and security of your login id and password and must refrain from sharing your credentials with any third party. 
          </p>
        </section>

        {/* Grievance Redressal */}
        <section>
          <h2 className="text-xl font-semibold mb-3">Grievance Redressal Mechanism:</h2>
          <p className="mb-4">
            Stradex International Private Limited has appointed a Grievance Redressal Officer who shall be available to redress customer grievances
            relating to any digital lending-related complaints and any such disputes arising out of this Privacy Policy.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-semibold mb-2">The name and contact details of the Grievance Redressal Officer are provided below:</p>
            <div className="ml-4">
              <p>Name: Manav Pradhan</p>
              <p>Address: L-42, Lajpat Nagar-2, New Delhi - 110024</p>
              <p>Contact Number:  +91-92204 68743</p>
              <p>Email: customercare@fundsmama.com</p>
            </div>
            <p className="mt-2 italic">Note: Request You to give us 48-72 hrs. to resolve your complaint.</p>
          </div>
        </section>

        {/* Final Sections */}
        <section className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-3">Amendment of Privacy Policy:</h2>
            <p className="text-justify">
              This Privacy Policy is subject to modification and/or change at the sole discretion of FundsMama. All such modifications shall be strictly
              in line with the RBI requirements and guidelines issued from time to time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Jurisdiction and Governing Laws:</h2>
            <p className="text-justify">
              Stradex International Private Limited is having its registered office in New Delhi, Delhi. For any such dispute arising out of this Policy,
              the Courts at New Delhi, Delhi shall have the exclusive jurisdiction to try such dispute.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Change in Privacy Policy:</h2>
            <ul className="list-disc ml-8 space-y-2">
              <li>
                FundsMama will periodically inform its users, at least once every year, of its rules and regulations, privacy policy or user agreement
                or any change in this respect;
              </li>
              <li>
                FundsMama will periodically inform its users, at least once every year, that in case of non-compliance by its users with rules and
                regulations, privacy policy or user agreement, FundsMama reserves the right to terminate the access or usage rights of the users to its
                platform and/ or remove any information on its platform which does not comply with the Information Technology Act.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default PrivacyPage;