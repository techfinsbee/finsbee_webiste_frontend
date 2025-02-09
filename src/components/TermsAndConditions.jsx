import React from "react";
import Header from "./Header";

const TermsAndConditions = () => {
  const dropdownData = [
    {
      title: "Home",
      link: "home",
    },
    {
      title: "Loans",
      link: "loan-section",
    },
    {
      title: "Mart",
      link: "mart",
    },
    {
      title: "About Us",
      link: "/about-us",
    },
    {
      title: "Contact Us",
      link: "contact-us",
    },
  ];
  return (
    <>
            <Header dropdownData={dropdownData}></Header>

      <div className="max-w-4xl mx-auto p-6 ">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Terms and Conditions
        </h1>

        <div className="space-y-6">
          <p className="text-sm text-gray-600">
            In consideration of Stradex International Private Limited (herein
            after referred to as "FundsMama", which expression shall include
            where appropriate its affiliates, successors and assigns), the user
            agrees to be bound by these Terms and Conditions as amended,
            supplemented and/or superseded by FundsMama from time to time.
          </p>

          <div className="mb-4">
            <p className="font-semibold mb-2">
              These Terms and Conditions/Terms of Service applies to any kind of
              loan including but not limited to following Loans:
            </p>
            <ul className="list-decimal pl-6">
              <li>Personal Loan</li>
              <li>Loan Against Property/Securities</li>
              <li>Loan Against Securities</li>
              <li>
                Other Loans [viz. Gold Loan, Home Loan, Marriage Loan, Medical
                Loan]
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-600">
            These terms of use (hereinafter the "Terms") establish an agreement
            between FundsMama having its principal place of business at L - 42,
            Lajpat Nagar 2, New Delhi – 110042 and You and shall govern your use
            of FundsMama proprietary risk evaluation and measurement software
            system ("FundsMama System") and the services set out in these Terms
            ("Service") rendered by FundsMama.
            <br /> <br />
            Supplemental terms may apply to specific Services, for example,
            arrangements for a specific occasion, movement or advancement, and
            such supplemental terms will be uncovered to You regarding the
            appropriate Service(s). Supplemental terms are in addition to, and
            shall be deemed a part of, these Terms for the purposes of the
            applicable Service(s). Supplemental and/or amended terms shall
            prevail over these Terms in the event of a conflict with respect to
            the applicable Services.
            <br /> <br />
            Stradex International Private Limited may, at its sole discretion,
            amend the Terms from time to time. Unless otherwise set out herein,
            amendments will be effective upon FundsMama’s posting of such
            updated Terms at this location or the amended policies or
            supplemental terms on the applicable Service(s). Your continued
            access or use of the Services after such posting constitutes your
            consent to be bound by the Terms, as amended.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold mb-4">
                1. Eligibility/Condition Precedent
              </h2>
              <div className="space-y-2">
                <p>
                  FundsMama may grant or continue to grant the loan to the
                  borrower if the following conditions are fulfilled or
                  continued to be fulfilled. FundsMama may grant or continue to
                  grant the loan to the borrower if the following conditions are
                  fulfilled or continued to be fulfilled. If You are an
                  individual, you must be at least 18 years old. If You are a
                  non-individual, you must be duly authorized (by such
                  non-individual entity) to agree to these Terms.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must be a solvent.</li>
                  <li>
                    Notwithstanding the aforesaid, you represent and warrant
                    that you are capable of entering into these Terms and
                    performing the obligations set out here under.{" "}
                  </li>
                  <li>You must be citizen of India.</li>
                  <li>
                    You must be a human being to enter into these Terms. Any use
                    of FundsMama System by ‘bots’ or other automated tools or
                    methods is not permitted under this Agreement.{" "}
                  </li>
                  <li>
                    Your application form shall have been accepted by FundsMama
                    in the manner as prescribed by FundsMama.{" "}
                  </li>
                  <li>
                    All the required documents legal or otherwise as may be
                    required by FundsMama, shall have been completed and signed
                    to the satisfaction of FundsMama.{" "}
                  </li>
                  <li>
                    All the primary and secondary evidence of the document as
                    demanded by FundsMama must be duly furnished.{" "}
                  </li>
                  <li>
                    There shall exist no potential event for default and all
                    representations and warranties contained herein and in the
                    application form and in the loan agreement or elsewhere
                    shall be true.{" "}
                  </li>
                  <li>
                    All other conditions precedent as FundsMama may require or
                    impose have been fulfilled to the satisfaction of FundsMama
                    or otherwise have been duly compiled with.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">2. Account Set Up</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Account registration requires you to submit certain
                    information such as your name, address, mobile phone number
                    and age and any unique identifier that may be issued to you
                    by FundsMama.
                  </li>
                  <li>
                    You agree that you have provided from start and maintained
                    accurate, complete, and up-to-date information in your
                    Account. Your failure to maintain accurate, complete, and
                    up-to-date Account information may result in your inability
                    to access and use FundsMama Systems and/or the Services
                    and/or the final referral for banking or financial that you
                    seek or result in FundsMama’ termination of this agreement
                    with you. Solely You are responsible for all activity that
                    occurs under your Account, and You agree to maintain the
                    security and secrecy of your Account username and password
                    at all times. Unless otherwise permitted by FundsMama in
                    writing, you shall only use and operate one Account with
                    FundsMama. You acknowledge and agree that any misuse of your
                    Account for reasons not attributable to FundsMama shall be
                    to your account and You will be liable for any and all
                    liabilities incurred as a result of such misuse.
                  </li>
                  <li>
                    You thus assent that any data put together by you for
                    Account set-up might be utilized by FundsMama as per the
                    security approach distributed at privacy policy which is
                    deemed to be part of these Terms.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">3. Service</h2>
              <div className="space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    The Service establishes Your entrance to FundsMama System,
                    the check of information you have given on the FundsMama
                    entryway and assessment by FundsMama of your credit
                    worthiness, and subject to FundsMama determining (in its
                    sole and absolute discretion) that it is appropriate, your
                    ability to submit an application (“Credit Facility
                    Application”) for short term credit facility (“Advance”) to
                    a duly licensed entity who has partnered with FundsMama
                    (“FundsMama Partner”) and use of such other functionalities
                    of FundsMama System as permitted by FundsMama. For the
                    avoidance of doubt, FundsMama is under no obligation
                    whatsoever to reveal to you (including your nominees, heirs
                    and successors) its assessment of your creditworthiness at
                    any point in time.
                  </li>
                  <li>
                    You acknowledge that FundsMama allows You to submit a Credit
                    Facility Application on the basis of a determination made by
                    and in such formats, methodologies and algorithms in
                    FundsMama Systems only. The FundsMama Systems undertake a
                    dynamic evaluation of risk in relation to each Credit
                    Facility Application submitted by You based on various
                    factors including the amount of the Advance, the credit
                    eligibility parameters and other requirements set out by the
                    FundsMama Partner. FundsMama Systems may undertake a
                    separate determination in relation to each Credit Facility
                    Application made by you. Given the dynamic nature of the
                    determination made by FundsMama Systems, You acknowledge
                    that there is no assurance or guarantee that FundsMama shall
                    allow You to submit a Credit Facility Application for each
                    and every Advance that you seek to avail.
                  </li>
                  <li>
                    You agree and accept that FundsMama or a FundsMama Partner
                    may in its sole discretion, by itself or through authorized
                    persons, advocate, agencies, bureau, etc. verify any
                    information given, check credit references, employment
                    details and obtain credit reports to determine
                    creditworthiness from time to time.
                  </li>
                  <li>
                    The Service does not guarantee that the Advance sought by
                    You will be disbursed to You by the FundsMama Partner.
                    FundsMama will make a preliminary determination of Your
                    creditworthiness in relation to every Advance sought by You
                    and submit its determination in this regard to the FundsMama
                    Partner. The final decision on whether or not to grant You
                    the Advance will rest with FundsMama Partner and will be
                    made using FundsMama Partner’s credit decision processes and
                    methodologies. FundsMama Partner is free to reject any
                    recommendation made by FundsMama to it about processing of a
                    Credit Facility Application or grant of Advance to You.
                  </li>
                  <li>
                    FundsMama Partner will require You to submit further
                    documentation, information and details as required under
                    applicable laws and its internal policies prior to taking
                    any decision about grant of Advance to You. When FundsMama
                    Partner decides to grant an Advance to You, it shall require
                    that You execute a loan/credit facility agreement (“Loan
                    Documentation”) with it to record the terms of the
                    arrangement.
                  </li>
                  <li>
                    Repayment: You must repay the Advance along with all
                    interest, charges and fees payable to FundsMama Partner in
                    such manner as prescribed by FundsMama Partner as and when
                    it becomes due. Services of FundsMama is only limited to
                    connect you to the credit providers and the Services of
                    FundsMama ends the moment the FundsMama Partner is connected
                    to You / You are connected to the Credit provider.
                  </li>
                  <li>
                    Separate Transactions: You acknowledge that an Advance
                    disbursed under the Loan Documentation is a distinct
                    transaction between You and FundsMama Partner, independent
                    of FundsMama’ Service. Any dispute between FundsMama Partner
                    and you with respect to any Advance disbursed to You, must
                    be directly settled between FundsMama Partner and you and
                    that you will not include or seek to include FundsMama in
                    such dispute, failing which FundsMama shall be at liberty to
                    take any and all actions that may be available to it to
                    protect its interests.
                  </li>
                  <li>
                    Collection Authorization: You agree to allow FundsMama to
                    send you payment reminders from time-to-time at such
                    frequency and in such manner as permissible under applicable
                    law. You further permit FundsMama to use (a) any User
                    Generated Content; and/or (b) other information which you
                    have granted FundsMama access to, for the purposes of
                    enabling FundsMama to send payment reminders to yourself or
                    to other persons who can be contacted by FundsMama through
                    you whether or not such other persons are users of the
                    FundsMama System to the extent permitted under applicable
                    law. You expressly permit FundsMama to use any or all of the
                    information provided or generated by you in respect of (a)
                    any credit facility you may have availed from any credit
                    issuing entity, irrespective of whether or not FundsMama
                    facilitated the obtaining of such credit facility as
                    provided for elsewhere in this Agreement; or (b) any credit
                    facility availed of by a third party from any credit issuing
                    agency where FundsMama’ analysis determines that the
                    information you have provided to FundsMama will enable it to
                    contact such person by either (i) deriving contact
                    information for such third party from the information
                    provided by or generated by you and then contacting them
                    directly; or (ii) by contacting you and requesting if you
                    will be willing to share contact information for such third
                    party or by requesting you to inform such third party that
                    FundsMama is attempting to contact her/him.
                  </li>

                  <li>
                    Network Access and Devices: You are responsible for
                    obtaining the data network access necessary to use the
                    Services. Your internet network providers (be it mobile
                    network or fixed line) data usage rates and fees will apply
                    if you access or use the Services from a wireless-enabled
                    device. You are responsible for acquiring and updating
                    compatible hardware or devices necessary to access and use
                    the Services and FundsMama Systems and any updates thereto.
                    FundsMama does not guarantee that the Services, or any
                    portion thereof, will function on any particular hardware or
                    devices. In addition, the Services may be subject to
                    malfunctions and delays inherent in the use of the internet
                    and electronic communications.
                  </li>
                </ul>
                <div className="space-y-4">
                  <p style={{ fontWeight: "600" }}>License</p>
                  <p>
                    Subject to your compliance with these Terms, FundsMama
                    grants You a limited, non-exclusive, revocable,
                    non-transferable license in India to: (i) access and use the
                    FundsMama Systems through your PC Framework or other
                    portable specialized gadget solely in connection with your
                    use of the Services; and (ii) access and use any content,
                    information and related materials that may be made available
                    through the Services, in each case solely for your personal,
                    non-commercial use. Any rights not expressly granted herein
                    are reserved by FundsMama and FundsMama’s licensors.
                  </p>
                  <br />
                  <p
                    className="text-black text-bold "
                    style={{ fontWeight: "600" }}
                  >
                    Restrictions
                  </p>
                  <p>You may not:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Use the Services except as expressly provided in these
                      Terms.
                    </li>
                    <li>
                      Provide any third parties with access to the Services.
                    </li>
                    <li>
                      Use the Services to post, send, transmit or otherwise make
                      available any unsolicited or unauthorized email messages,
                      advertising, promotional materials, junk mail, spam, or
                      chain letters.
                    </li>
                    <li>
                      Remove any copyright, trademark or other proprietary
                      notices from any portion of the Services. Reproduce,
                      modify, prepare derivative works based upon, distribute,
                      license, lease, sell, resell, transfer, publicly display,
                      publicly perform, transmit, stream, broadcast or otherwise
                      exploit the Services except as expressly permitted by
                      Buddy.
                    </li>
                    <li>
                      Decompile, reverse engineer or disassemble the Services
                    </li>
                    <li>
                      Cause or launch any programs or scripts for the purpose of
                      scraping, indexing, surveying, or otherwise data mining
                      any portion of the Services or unduly burdening or
                      hindering the operation and/or functionality of any aspect
                      of the Services or FundsMama Systems or any other computer
                      system including by introduction of any virus, Trojan
                      horses, worms, time bombs or such material.
                    </li>
                    <li>
                      Attempt to gain unauthorized access to or impair any
                      aspect of the Services or its related systems or networks.
                    </li>
                    <li>
                      Re-sell, grant any rights to third parties to the
                      Services, lease, time-share, lend or rent the Services.
                    </li>
                    <li>
                      Use the Services to host, display, upload, modify,
                      publish, transmit, update or share any information.
                    </li>

                    <li>
                      Belongs to any other Person and to which you do not have
                      any right to;
                    </li>
                    <li>
                      Is grossly harmful, harassing, blasphemous defamatory,
                      obscene, pornographic, pedophilic, libelous, invasive of
                      another's privacy, hateful, or racially, ethnically
                      objectionable, disparaging, relating or encouraging money
                      laundering or gambling, or otherwise unlawful in any
                      manner whatever;
                    </li>
                    <li>Harms minors in any manner</li>
                    <li>
                      Infringes any patent, trademark, copyright or other
                      proprietary rights;
                    </li>
                    <li>Violates any law which is in force</li>
                    <li>
                      Deceives or misleads the addressee about the origin of
                      such messages or communicates any information which is
                      grossly offensive or menacing in nature
                    </li>
                    <li>
                      Impersonates another person (H) threatens the unity,
                      integrity, defense, security or sovereignty of India,
                      friendly relations with foreign states, or public order or
                      causes incitement to the commission of any cognizable
                      offence or prevents investigation of any offence or is
                      insulting any other nation.
                    </li>
                    <li>
                      FundsMama shall have the on-going right to monitor your
                      use of the Services to the extent required to determine
                      your compliance with the terms of these Terms.
                    </li>
                  </ul>
                  <br />
                  <div className="space-y-4">
                    <p style={{ fontWeight: "600" }}>User Generated Content </p>
                    <p>
                      You understand that all User Generated Content, to the
                      extent permitted by the FundsMama System, is the sole
                      responsibility of the person from whom such User Generated
                      Content originated. This means that you, and not FundsMama
                      is solely responsible for any User Generated Content you
                      upload, download, post, email, transmit, store or
                      otherwise make available through your Use of the Service.
                      FundsMams does not control the User Generated Content used
                      in the Service, nor does it guarantee the accuracy,
                      integrity or quality of such User Generated Content. You
                      understand and agree that your Use of the Service and any
                      User Generated Content is solely at your own risk.{" "}
                    </p>
                    <p>
                      User Generated Content means any information that may be
                      generated or encountered through your Use of the Service,
                      such as datafiles, device characteristics, written text,
                      software, music, graphics, photographs, images, sounds,
                      videos, messages and any other like materials.{" "}
                    </p>
                    <p>
                      You shall not use the Services to upload, download, post,
                      email, transmit, store or otherwise make available any
                      User Generated Content that is unlawful, harassing,
                      threatening, harmful, tortious, defamatory, libelous,
                      abusive, violent, obscene, vulgar, pornographic, explicit,
                      invasive of another’s privacy, hateful, racially or
                      ethnically offensive, or otherwise objectionable.
                    </p>
                    <p>
                      You are responsible for backing up, to your own computer
                      or other device, any important documents, images or other
                      User Generated Content that you store or access via the
                      Service. FundsMama shall use reasonable skill and due care
                      in providing the Service, but FundsMams does not guarantee
                      or warrant that any User Generated Content you may store
                      or access through the Service will not be subject to
                      inadvertent damage, corruption or loss.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">4. Limited Warranty</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You understand and acknowledge that certain risks are inherent
                  in the transmission of information over the internet. By
                  entering in to this agreement You have chosen to use the
                  security measures provided by FundsMama even though other
                  security measures are available. While FundsMama uses industry
                  standard information security measures to protect the Service
                  from viruses and malicious attacks, FundsMams does not
                  represent or guarantee that the Service will be free from
                  loss, corruption, attack, viruses, interference, hacking, or
                  other security intrusion and FundsMama disclaims any liability
                  relating thereto to the extent that such loss, corruption,
                  attack, viruses, interference, hacking, or other security
                  intrusion occur despite FundsMama using the information
                  security measures. FundsMama warrants that, during the term of
                  this agreement, FundsMama will employ commercially reasonable
                  system security measures. Except as expressly set forth in
                  this section, FundsMama makes no representation, warranty,
                  covenant or agreement that its security measures will be
                  effective and neither FundsMama nor its affiliates shall have
                  any liability for the breach of its security measures, or the
                  integrity of the systems or FundsMama’ computer servers,
                  unless caused by the willful misconduct or gross negligence of
                  its employees.
                </li>
                <li>
                  The Services are provided to you on an “as-is” and “as
                  available basis”. FundsMama is not responsible for any failure
                  of the telecommunications network or other communications
                  links utilized to gain access to the Services. FundsMama does
                  not represent that the Services will meet your requirements or
                  that operation of the Services will be uninterrupted or error
                  free.
                </li>
                <li>
                  You further acknowledge that the Service is not intended or
                  suitable for use in situations or environments where the
                  failure or time delays of, or errors or inaccuracies in, the
                  content, data or information provided by the Service could
                  lead to death, personal injury, or severe physical or
                  environmental damage.{" "}
                </li>
                <li>
                  FundsMama and its affiliates, subsidiaries, officers,
                  directors, employees, agents, partners and licensors hereby
                  disclaims and expressly waives all other, conditions,
                  representations and guarantees, whether express or implied,
                  arising by law, custom, oral or written statements of
                  FundsMama or third parties including, but not limited to, any
                  warranty of merchantability or fitness for particular purpose
                  or of error-free and uninterrupted use or of non-infringement
                  except to the extent expressly provided above (limited
                  warranty). In particular, FundsMama and its affiliates,
                  subsidiaries, officers, directors, employees, agents, partners
                  and licensors make no warranty that (i) the service will meet
                  your requirements. (ii) your use of the service will be
                  timely, uninterrupted, secure or error-free.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">
                5. Confidential Information
              </h2>
              <p>
                In course of your dealings with FundsMama, either party may
                share and provide the other with access to its confidential and
                Proprietary Information (“Confidential Information”).
                Confidential Information may be disclosed either orally,
                visually, in writing (including graphic material) or by way of
                consigned items. The receiving party agrees to take all
                reasonable security precautions, including precautions at least
                as great as it takes to protect its own confidential
                information, to protect the secrecy of the Confidential
                Information. Confidential Information shall be disclosed only on
                a need-to-know basis. Except as provided herein, the parties
                agree to treat the same as confidential and shall not divulge,
                directly or indirectly, to any other person, firm, corporation,
                association or entity, for any purpose whatsoever, such
                information, and shall not make use of such information, without
                the prior written consent of the disclosing party. Confidential
                Information includes but is not limited to the Services,
                documentation, third party materials, business plans, business
                forecasts, financial information, customer lists, development,
                design details, specifications, patents, copyrights, trade
                secrets, proprietary information, methodologies, techniques,
                sketches, drawings, models, inventions, know-how, processes,
                algorithms, software programs, and software source documents.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">
                6. Limitation of Liability
              </h2>
              <p className="uppercase">
                IN NO EVENT SHALL FUNDSMAMA BE LIABLE, WHETHER IN CONTRACT, TORT
                (INCLUDING NEGLIGENCE) OR OTHERWISE FORANY LOSS OF PROFITS,
                BUSINESS, CONTRACTS, OR REVENUES, LOSS OF OPERATION TIME,
                INCREASED COSTS ORWASTED EXPENDITURE, LOSS OF GOODWILL OR
                REPUTATION, SPECIAL, INDIRECT, INCIDENTAL PUNITIVE
                ORCONSEQUENTIAL DAMAGE OF ANY NATURE WHATSOEVER OR HOWSOEVER
                ARISING OUT OF THIS AGREEMENT;
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">7. Indemnity</h2>
              <p>
                You shall defend, indemnify and hold harmless FundsMama, it’s
                officers, directors, employees and agents, from and against any
                and all claims, damages, obligations, losses, liabilities, debts
                and costs (including reasonable attorneys’ fees), brought
                against FundsMama by third parties alleging that
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of and access of the Service.</li>
                <li>Your violation of these Terms.</li>
                <li>
                  Your violation of any third party right, including without
                  limitation any copyright, property, or privacy right of
                  FundsMama’ service providers or Partner.
                </li>
                <li>
                  Any claim that the User Generated Content you submitted caused
                  damage to FundsMama or FundsMama’ Partner.
                </li>
                <li>
                  Any rules that are mandated by the central bank of India and
                  any other central or state rules, laws, bylaws or regulations
                  applicable to the Services hereunder to be followed. Your
                  indemnification obligation under this Section 8 will survive
                  termination of this Agreement and Your use of the Services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">8. Privacy</h2>
              <p>
                You understand that by using the Service, you consent and agree
                to the collection and use of certain information about You and
                your Use of the Service in accordance with FundsMama’ Privacy
                Policy and these Terms. FundsMama’ Privacy Policy applies to all
                Your information collected under these Terms. You further
                understand and agree that this information may be transferred to
                the other countries for storage, processing and use by
                FundsMama, its affiliates, and/or their service providers in
                accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">9. Assignment</h2>
              <p>
                You shall not assign this Agreement without the prior written
                consent of FundsMama.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">
                10. Arbitration and Governing Law
              </h2>
              <p>
                Irrespective of Your international placement the Parties hereby
                agree that this Agreement shall be governed by and construed in
                accordance with the laws of India, without regard to its
                conflict of laws principles. Any and all disputes that arise
                under this Agreement shall be subject to the exclusive
                jurisdiction of the competent courts in New Delhi, India.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">11. Notices</h2>
              <p>
                All notices and other communications made or required to be
                given under this Agreement shall be in writing and shall be
                deemed givenupon receipt when sent through
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Personal service, to the address specified below: Stradex
                  International Private Limited
                </li>
                <p style={{ fontWeight: "600" }}>
                  L-42 ,Lajpat Nagar 2,New Delhi - 110042
                </p>
                <li>
                  Registered post acknowledgement due, Stradex International
                  Private Limited
                </li>
                <p style={{ fontWeight: "600" }}>
                  L-42 ,Lajpat Nagar 2,New Delhi - 110042
                </p>
                <li>email – customercare@fundsmama.com</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">12. Severability</h2>
              <p>
                If any of the terms, conditions or provisions contained in this
                Agreement are determined by any court of competent jurisdiction
                to be invalid, unlawful or unenforceable to any extent, such
                term, condition or provision shall to that extent be severed
                from the remaining terms, conditions and provisions which shall
                continue to be valid to the fullest extent permitted by law
                under the lawful circumstances.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">13. Waiver</h2>
              <p>
                No waiver of any breach of any provision of this Agreement shall
                constitute a waiver of any prior, concurrent or subsequent
                breach of the same or any other provisions of this Agreement.
                Further, no waiver shall be effective unless made in writing and
                signed by an authorized signatory of the waiving party.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">14. Force Majeure</h2>
              <p>
                FundsMama will not be liable to the other for failure or delay
                in the performance of Services, if such delay or failure is
                caused by strike, riot, fire, flood, natural disaster, or other
                similar cause beyond its control.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">
                15. Other Products and Services Terms of use:
              </h2>
              <p>
                Stradex International Private Limited provide the variety of
                products and services to our valuable users. It goes as follows:{" "}
                <br />
                MamaMart - MamaMart is an electronic platform which acts as a
                communication bridge to connect our users with the sellers on
                the interested products promoted in the App. Stradex
                International Private Limited shall collect the applicable
                payment from the customer for any purchase made on the platform,
                in accordance with the selected payment method and applicable
                terms. <br />
                FM Rewards is a feature offered by Stradex International Private
                Limited to its FundsMama users. A user of FundsMama will be
                gratified on successful disbursement for a personal loan applied
                through FundsMama and on every purchase made by the user. The
                user can redeem these virtual coins on FundsMama platform. This
                is a promotional activity done by Stradex International Private
                Limited and has all the rights to Suspend, Discontinue the
                Promotional with its sole discretion.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">
                16. Credit Card & Other Financial Services
              </h2>
              <p>
                The user acknowledges and agrees that FundsMama being a Digital
                Fintech Marketplace, will have the right to pass the leads of
                the interested users to partnered brands associated with Credit
                cards and other financial products, once the user shows interest
                in the service. The user further agrees to receive
                communications through calls/SMS/emails/other modes of
                communication from the partnered banks and other financial
                institutions regarding the credit card and other financial
                services. Our partnered banks and/or NBFCs have the authority to
                call the concerned user and help in getting the service approval
                based on the eligibility. All financial institutions and banks
                have the right to retain and use your information as required.{" "}
                <br />
                In this context, you agree and consent to receive all
                information/reports/statements/announcements at the
                communication mode given by you.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-bold mb-4">17. Entire Agreement</h2>
              <p>
                These Terms along with any supplementary terms or appendage as
                may be prescribed by FundsMama /FundsMama Partner constitute the
                entire agreement between the parties pertaining to the subject
                matter contained herein and any addition to this or any other
                written or oral agreements existing between the parties or
                modifications to these terms shall have no force or effect
                unless expressly agreed to in writing or acknowledged inwriting
                by Buddy. <br />
                FundsMama is solving the fundamental problem of providing to the
                fingertips a quick, convenient and transparent access to credit
                in India. <br />
                Any modifications to these terms and conditions shall be updated
                on this page of FundsMama with the date of update, you shall be
                required to visit the Terms and Conditions and acquaint yourself
                with the Terms and Conditions from time to time and FundsMama
                shall not be liable to intimate you upon any update or
                modification of hereunder.
              </p>
            </section>
          </div>
          <section>
              <a href="https://sachet.rbi.org.in/" style={{textDecoration:"underline"}}>
              RBI sachet portal (weblink)
              </a>
            </section>
          <div className="mt-8 pt-4 border-t">
            <p className="text-sm text-gray-500">
              These Terms and conditions were last updated on: 30-01-2025
            </p>
            <p className="text-sm text-gray-500">
              Copyright ©2025. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
