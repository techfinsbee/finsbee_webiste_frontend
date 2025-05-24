import React from "react";
// import Header from "./Header";
import HomeHeader from "./HomeHeader";
const HomeCancellation = () => {
 const dropdownData = [
    
    { title: "Loans", link: "loan-section-home" },
    { title: "MamaMart", link: "mart-home" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact Us", link: "contact-us" },
  ];
  return (
    <>
      <HomeHeader
        dropdownData={dropdownData}
        COLOR="#fff"
        Hover="home"
        TXTCOLOR="#"
      ></HomeHeader>

      <div className="max-w-4xl mx-auto p-6 ">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Cancellation & Refund Policy
        </h1>

        <div className="space-y-6">
          <p className="text-sm text-gray-600 font-bold">
          Last updated on 17-04-2025 14:06:19
          </p>

          <div className="mb-4">
            <p className="font-semibold mb-2">
              STRADEX INTERNATIONAL PRIVATE LIMITED believes in helping its
              customers as far as possible, and has therefore a liberal
              cancellation policy. Under this policy:
            </p>
            <ul className="list-decimal pl-6">
              <li>
                {" "}
                Cancellations will be considered only if the request is made
                immediately after placing the order. However, the cancellation
                request may not be entertained if the orders have been
                communicated to the vendors/merchants and they have initiated
                the process of shipping them.
              </li>
              <li>
                STRADEX INTERNATIONAL PRIVATE LIMITED does not accept
                cancellation requests for perishable items like flowers,
                eatables etc. However, refund/replacement can be made if the
                customer establishes that the quality of product delivered is
                not good.
              </li>
              <li>
                In case of receipt of damaged or defective items please report
                the same to our Customer Service team. The request will,
                however, be entertained once the merchant has checked and
                determined the same at his own end. This should be reported
                within 7 Days days of receipt of the products. In case you feel
                that the product received is not as shown on the site or as per
                your expectations, you must bring it to the notice of our
                customer service within 7 Days days of receiving the product.
                The Customer Service Team after looking into your complaint will
                take an appropriate decision.
              </li>
              <li>
                In case of complaints regarding products that come with a
                warranty from manufacturers, please refer the issue to them. In
                case of any Refunds approved by the STRADEX INTERNATIONAL
                PRIVATE LIMITED, it’ll take 9-15 Days days for the refund to be
                processed to the end customer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeCancellation;