import React from "react";
import Navbar from "./Navbar/Navbar";

const Refund = () => {
    const dropdownData = [
    
    { title: "Loans", link: "loan-section-home" },
    // { title: "MamaMart", link: "mart-home" },
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
      <div style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
        <h1>Cancellation & Refund Policy</h1>
        <p><strong>Last updated on 17-04-2025 14:06:19</strong></p>
        <p>
          STRADEX INTERNATIONAL PRIVATE LIMITED believes in helping its
          customers as far as possible, and has therefore a liberal
          cancellation policy. Under this policy:
        </p>

        <ul>
          <li>
            Cancellations will be considered only if the request is made
            immediately after placing the order. However, the cancellation
            request may not be entertained if the orders have been communicated
            to the vendors/merchants and they have initiated the process of
            shipping them.
          </li>
          <li>
            STRADEX INTERNATIONAL PRIVATE LIMITED does not accept cancellation
            requests for perishable items like flowers, eatables etc. However,
            refund/replacement can be made if the customer establishes that the
            quality of product delivered is not good.
          </li>
          <li>
            In case of receipt of damaged or defective items please report the
            same to our Customer Service team. The request will, however, be
            entertained once the merchant has checked and determined the same at
            his own end. This should be reported within <strong>7 days</strong> of
            receipt of the products.
          </li>
          <li>
            In case you feel that the product received is not as shown on the
            site or as per your expectations, you must bring it to the notice
            of our customer service within <strong>7 days</strong> of receiving the
            product. The Customer Service Team after looking into your complaint
            will take an appropriate decision.
          </li>
          <li>
            In case of complaints regarding products that come with a warranty
            from manufacturers, please refer the issue to them.
          </li>
          <li>
            In case of any Refunds approved by STRADEX INTERNATIONAL PRIVATE
            LIMITED, it’ll take <strong>9-15 days</strong> for the refund to be
            processed to the end customer.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Refund;
