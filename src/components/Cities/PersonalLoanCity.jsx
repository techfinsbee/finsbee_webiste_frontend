import { useState } from "react";
import Footer from '../Footer'
import WhyChooseUs from '../WhyChooseUs'
import HowItWorks from './HowItWorks'
import  Navbar from '../Navbar/Navbar'
const PersonalLoanCity = ({ city = "Mumbai" }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    PANNumber: "",
    Loan: "",
    phoneNumber: "",
  });

  const Loans = [
    {
      img: "/loan1.png",
      title: "Home Loan",
      content:
        "Turn your dream home into reality with flexible repayment options and minimal documentation.",
    },
    {
      img: "/loan2.png",
      title: "Loan Against Property",
      content:
        "Unlock your property's potential with competitive rates and hassle-free application.",
    },
    {
      img: "/loan1.png",
      title: "Loan Against Security",
      content:
        "Leverage investments without liquidating with competitive LTV ratios and favorable terms.",
    },
    {
      img: "/loan5.png",
      title: "Personal Loan",
      content:
        "Quick approvals with flexible EMI options and no collateral requirements.",
    },
  ];

  const dropdownData = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Loans",
      link: "loan-section-home",
    },
    {
      title: "Mart",
      link: "mart-home",
    },
    {
      title: "About Us",
      link: "/aboutus",
    },
    {
      title: "Contact Us",
      link: "contact-us-home",
    },
  ];

  const cityData = {
    Chennai:{
      image:"https://www.fodors.com/wp-content/uploads/2019/12/07_ChennaiArchitecture__MadrasHighcourt_shutterstock_300565766.jpg",
      content:"If you're considering a personal loan in Chennai, several banks and financial institutions offer competitive interest rates and flexible terms to cater to diverse financial needs. For instance, **IDFC FIRST Bank** provides personal loans starting at **9.99% per annum**, with flexible repayment options and no prepayment penalties . **Poonawalla Fincorp** offers loans up to ₹50 lakh at **9.99% per annum**, featuring minimal documentation and quick approval . **DBS Bank** provides personal loans ranging from ₹25,000 to ₹15 lakh with interest rates starting at **10.99% per annum**, offering a completely paperless application process and quick disbursals .([idfcfirstbank][1], [DBS Bank][2]) When evaluating personal loan options in Chennai, it's essential to consider factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, **ICICI Bank** offers personal loans with interest rates between **10.85% and 16.65% per annum**, with processing charges up to 2% of the loan amount plus applicable taxes . **Axis Bank** provides personal loans with interest rates starting at **11.25% per annum**, offering swift processing and minimal paperwork . **Tata Capital** offers personal loans up to ₹35 lakh with interest rates starting at **11.99% per annum**, featuring flexible repayment tenures and quick disbursal . It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([Axis Bank][3], [Tata Capital][4])"
    },
    Mumbai: {
      image:
        "https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg",
      content: "If you're exploring personal loan options in Mumbai, several banks and financial institutions offer competitive rates and flexible terms to cater to diverse financial needs. For instance, Kotak Mahindra Bank provides personal loans up to ₹35 lakhs with interest rates starting at 10.99% per annum, featuring a 100% digital application process and minimal documentation requirements. Similarly, IndusInd Bank offers loans ranging from ₹30,000 to ₹50 lakhs at attractive interest rates starting from 10.49%, with benefits like no collateral requirement and instant approvals. DBS Bank also presents a fully digital loan process with fixed interest rates and quick disbursals, ensuring a hassle-free experience for eligible customers. When considering a personal loan in Mumbai, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, Axis Bank offers personal loans with interest rates starting at 11.25% per annum, along with a 'No Reset' policy ensuring fixed rates throughout the loan tenure. Additionally, institutions like Tata Capital and IDFC FIRST Bank provide flexible repayment options and quick disbursals, catering to both salaried and self-employed individuals. It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals",
    },
    Banglore:{
      image:"https://www.mistay.in/travel-blog/content/images/2021/08/Roam-Around-the-Top-7-Historical-Monuments-of-Bangalore-I-MiStay.jpeg",
      content:"If you're considering a personal loan in Bengaluru, several banks and financial institutions offer competitive rates and flexible terms to cater to diverse financial needs. For instance, IDFC FIRST Bank provides personal loans starting at 9.99% per annum, featuring a fully digital application process, flexible repayment options, and no prepayment penalties . Similarly, ICICI Bank offers personal loans with interest rates ranging from 10.85% to 16.65% per annum, along with processing charges up to 2% of the loan amount . HDFC Bank's personal loan interest rates vary between 10.90% and 24.00% per annum, with processing fees up to ₹6,500 plus GST .([idfcfirstbank][1], [ICICI Bank][2], [Bankbazaar][3]) When evaluating personal loan options in Bengaluru, it's essential to consider factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, Axis Bank offers personal loans with interest rates starting at 11.25% per annum . State Bank of India provides personal loans with interest rates ranging from 10.30% to 15.30% per annum, depending on the applicant's profile . Additionally, Canara Bank's personal loan interest rates range between 10.70% and 16.15% per annum . It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([Bankbazaar][3], [ClearTax][4])"
    },
    Kolkata:{
      image:"https://cdn.getyourguide.com/img/location/54b551f908360.jpeg/88.jpg",
      content:"If you're seeking a personal loan in Kolkata, numerous banks and financial institutions offer competitive rates and flexible terms to suit diverse financial needs. For instance, IDFC FIRST Bank provides personal loans up to ₹10 lakhs with interest rates starting at 9.99% per annum, featuring a 100% digital application process, flexible repayment options, and zero foreclosure charges.  Similarly, Kotak Mahindra Bank offers personal loans up to ₹35 lakhs with interest rates starting at 10.99% per annum, along with a fully digital application process and processing fees up to 5% of the loan amount.  DBS Bank also presents personal loans ranging from ₹25,000 to ₹15 lakhs with interest rates starting at 10.99% per annum, offering a completely paperless application process and quick disbursals. ([idfcfirstbank][1], [Kotak][2], [DBS Bank][3]) When evaluating personal loan options in Kolkata, it's essential to consider factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, HDFC Bank offers personal loans up to ₹40 lakhs with flexible repayment tenures of up to 60 months and quick approvals, with funds disbursed within four working days for non-banking customers.  Tata Capital provides personal loans up to ₹35 lakhs with interest rates starting at 11.99% per annum, featuring minimal documentation and quick disbursal.  Bandhan Bank offers personal loans ranging from ₹50,000 to ₹25 lakhs with flexible repayment tenures up to 60 months and faster loan processing times.  It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([HDFC Bank][4], [Tata Capital][5], [Bandhan Bank][6])"
    },
    Jaipur:{
      image:"http://www.transindiatravels.com/wp-content/uploads/city-palace-jaipur-2.jpg",
      content:"If you're exploring personal loan options in Jaipur, several banks and financial institutions offer competitive rates and flexible terms to cater to diverse financial needs. For instance, Kotak Mahindra Bank provides personal loans up to ₹35 lakhs with interest rates starting at 10.99% per annum, featuring a 100% digital application process and minimal documentation requirements.  Similarly, ICICI Bank offers personal loans with interest rates ranging from 10.85% to 16.65% per annum, along with processing charges up to 2% of the loan amount.  DBS Bank also presents personal loans ranging from ₹25,000 to ₹15 lakhs with interest rates starting at 10.99% per annum, offering a completely paperless application process and quick disbursals. ([Kotak][1], [ICICI Bank][2]) When considering a personal loan in Jaipur, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, Tata Capital offers personal loans up to ₹35 lakhs with interest rates starting at 11.99% per annum, featuring minimal documentation and quick disbursal.  IndusInd Bank provides loans ranging from ₹30,000 to ₹5 lakhs at attractive interest rates starting from 10.49% per annum, with benefits like no collateral requirement and instant approvals.  Bandhan Bank offers personal loans ranging from ₹50,000 to ₹25 lakhs with flexible repayment tenures up to 60 months and faster loan processing times.  It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([Tata Capital][3], [indus-ind][4])",
    },
    Coimbatore:{
      image:"https://www.overstaytonight.com/wp-content/uploads/2021/10/Adiyogi-Shiva-Statue.jpg",
      content:"If you're seeking a personal loan in Coimbatore, several banks and financial institutions offer competitive rates and flexible terms to cater to diverse financial needs. For instance, Kotak Mahindra Bank provides personal loans up to ₹35 lakhs with interest rates starting at 10.99% per annum, featuring a 100% digital application process and minimal documentation requirements.  Similarly, IndusInd Bank offers loans ranging from ₹30,000 to ₹5 lakhs at attractive interest rates starting from 10.49% per annum, with benefits like no collateral requirement and instant approvals.  DBS Bank also presents personal loans up to ₹15 lakhs with interest rates starting at 10.99% per annum, offering a completely paperless application process and quick disbursals. ([CreditMantri][1], [Kotak][2]) When considering a personal loan in Coimbatore, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, Tata Capital offers personal loans up to ₹35 lakhs with interest rates starting at 11.99% per annum, featuring minimal documentation and quick disbursal.  Hero FinCorp provides loans ranging from ₹50,000 to ₹5 lakhs with interest rates starting at 1.58% per month, offering a 100% digital application process and flexible repayment tenures up to 36 months.  Additionally, Airtel Finance offers personal loans up to ₹9 lakhs with interest rates starting at 11.5% per annum, with quick approval and disbursal within 24 hours.  It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([Hero FinCorp][3], [Airtel][4])",
    },
    Ahmedabad:{
      image:"https://assets-news.housing.com/news/wp-content/uploads/2022/07/09233549/ahmedabad-sightseeing-and-things-to-do-feature-compressed.jpg",
      content:"If you're exploring personal loan options in Ahmedabad, several banks and financial institutions offer competitive interest rates and flexible terms to cater to diverse financial needs. For instance, Kotak Mahindra Bank provides personal loans up to ₹35 lakhs with interest rates starting at 10.99% per annum, featuring a 100% digital application process and minimal documentation requirements.  Similarly, ICICI Bank offers personal loans up to ₹50 lakhs with interest rates ranging from 10.85% to 16.65% per annum, along with processing charges up to 2.5% of the loan amount plus applicable taxes.  DBS Bank also presents personal loans ranging from ₹25,000 to ₹15 lakhs with interest rates starting at 10.99% per annum, offering a completely paperless application process and quick disbursals. ([Kotak][1], [ICICI Bank][2]) When considering a personal loan in Ahmedabad, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, IDFC FIRST Bank offers personal loans with interest rates starting at 9.99% per annum, featuring flexible repayment options and zero prepayment penalties.  Tata Capital provides personal loans up to ₹35 lakhs with interest rates starting at 11.99% per annum, featuring minimal documentation and quick disbursal.  Bandhan Bank offers personal loans ranging from ₹50,000 to ₹25 lakhs with flexible repayment tenures up to 60 months and faster loan processing times.  It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([idfcfirstbank][3])",
    },
    Delhi:{
      image:"https://www.mistay.in/travel-blog/content/images/2020/07/delhi-3210134_1920.jpg",
      content:"If you're exploring personal loan options in Delhi, several banks and financial institutions offer competitive interest rates and flexible terms to cater to diverse financial needs. For instance, IDFC FIRST Bank provides personal loans with interest rates starting at 9.99% per annum, featuring a fully digital application process, flexible repayment options, and zero prepayment penalties.  Similarly, ICICI Bank offers personal loans with interest rates ranging from 10.85% to 16.65% per annum, along with processing charges up to 2% of the loan amount plus applicable taxes.  HDFC Bank's personal loan interest rates vary between 10.90% and 24.00% per annum, with processing fees up to ₹6,500 plus GST.  Additionally, SBI offers personal loans starting from 10.30% per annum, depending on the applicant's profile. ([idfcfirstbank][1], [State Bank of India][2]) When considering a personal loan in Delhi, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, Kotak Mahindra Bank offers personal loans with interest rates starting at 10.99% per annum, along with a fully digital application process and processing fees up to 5% of the loan amount.  DBS Bank provides personal loans ranging from ₹25,000 to ₹15 lakhs with interest rates starting at 10.99% per annum, offering a completely paperless application process and quick disbursals.  IndusInd Bank offers loans with interest rates starting from 10.49% per annum, with benefits like no collateral requirement and instant approvals.  It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([indus-ind][3])",
    },
    Hyderabad:{
      image:"https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Charminar1-1.jpg",
      content:"If you're exploring personal loan options in Hyderabad, several banks and financial institutions offer competitive interest rates and flexible terms to cater to diverse financial needs. For instance, IDFC FIRST Bank provides personal loans up to ₹10 lakhs with interest rates starting at 9.99% per annum, featuring a 100% digital application process, flexible repayment options, and zero prepayment penalties.  Similarly, ICICI Bank offers personal loans up to ₹50 lakhs with interest rates ranging from 10.85% to 16.65% per annum, along with processing charges up to 2% of the loan amount plus applicable taxes.  HDFC Bank's personal loan interest rates vary between 10.90% and 24.00% per annum, with processing fees up to ₹6,500 plus GST. ([ICICI Bank][1], [HDFC Bank][2]) When considering a personal loan in Hyderabad, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, Kotak Mahindra Bank offers personal loans up to ₹35 lakhs with interest rates starting at 10.99% per annum, along with a fully digital application process and processing fees up to 5% of the loan amount.  DBS Bank provides personal loans ranging from ₹25,000 to ₹15 lakhs with interest rates starting at 10.99% per annum, offering a completely paperless application process and quick disbursals.  Tata Capital offers personal loans up to ₹35 lakhs with interest rates starting at 11.99% per annum, featuring minimal documentation and quick disbursal.  It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.",
    },
    Pune: {
      image:"https://www.holidify.com/images/compressed/4894.jpg",
      content:"If you're seeking a personal loan in Pune, several banks offer competitive interest rates and flexible terms to suit various financial needs. For instance, IDFC FIRST Bank provides personal loans up to ₹10 lakhs with interest rates starting at 9.99% per annum, featuring a 100% digital application process, flexible repayment options, and zero prepayment penalties.  Similarly, ICICI Bank offers personal loans up to ₹50 lakhs with interest rates ranging from 10.85% to 16.65% per annum, along with processing charges up to 2% of the loan amount plus applicable taxes.  DBS Bank also presents personal loans ranging from ₹25,000 to ₹15 lakhs with interest rates starting at 10.99% per annum, offering a completely paperless application process and quick disbursals.&#x20; When considering a personal loan in Pune, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, Kotak Mahindra Bank offers personal loans up to ₹35 lakhs with interest rates starting at 10.99% per annum, along with a fully digital application process and processing fees up to 5% of the loan amount.  Bank of Maharashtra offers personal loans up to ₹20 lakhs with interest rates starting at 10.00% per annum, featuring a processing fee of 1% of the loan amount plus GST, and no prepayment penalty.  Additionally, HDFC Bank provides personal loans up to ₹40 lakhs, with interest rates varying based on the applicant's profile.  It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([Bank of Maharashtra][1], [HDFC Bank][2])",
    },
    Surat: {
      image:"https://ischoolconnect.com/pages/wp-content/uploads/2023/10/Surat.png",
      content:"If you're seeking a personal loan in Surat, several banks and financial institutions offer competitive interest rates and flexible terms to cater to diverse financial needs. For instance, Kotak Mahindra Bank provides personal loans up to ₹35 lakhs with interest rates starting at 10.99% per annum, featuring a 100% digital application process and minimal documentation requirements. Similarly, DBS Bank offers personal loans ranging from ₹25,000 to ₹15 lakhs with interest rates starting at 10.99% per annum, offering a completely paperless application process and quick disbursals. Tata Capital provides personal loans up to ₹35 lakhs with interest rates starting at 11.99% per annum, featuring minimal documentation and quick disbursal. Hero FinCorp offers personal loans up to ₹5 lakhs with interest rates starting at 1.58% per month, providing a 100% digital application process and flexible repayment tenures up to 36 months. Additionally, HDFC Bank offers personal loans up to ₹40 lakhs with interest rates varying based on the applicant's profile, along with a simple application process and flexible repayment tenures of up to 60 months. When considering a personal loan in Surat, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, IDFC FIRST Bank offers personal loans with interest rates starting at 9.99% per annum, featuring flexible repayment options and zero prepayment penalties. IndusInd Bank provides personal loans with interest rates starting from 10.49% per annum, offering loan amounts up to ₹5 lakhs and repayment tenures ranging from 12 to 84 months. Local cooperative banks like The Surat Mercantile Co-operative Bank Ltd. offer personal loans at interest rates around 12.00% per annum. It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([indus-ind][1], [sumcobank.com][2])",
    },
    Indore: {
      image:"https://imgcld.yatra.com/ytimages/image/upload/t_seo_Holidays_w_1400_h_410_c_fill_g_auto_q_auto:good_f_jpg/v1462946840/Indore_overview1.jpg",
      content:"",
    },
    Vadodara: {
      image:"https://mediaim.expedia.com/destination/1/cf4693d85b20451e1c407193ab6e6ab9.jpg",
      content:"If you're seeking a personal loan in Indore, several banks and financial institutions offer competitive interest rates and flexible terms to cater to diverse financial needs. For instance, Kotak Mahindra Bank provides personal loans up to ₹35 lakhs with interest rates starting at 10.99% per annum, featuring a 100% digital application process and minimal documentation requirements. Similarly, DBS Bank offers personal loans ranging from ₹25,000 to ₹15 lakhs with interest rates starting at 10.99% per annum, offering a completely paperless application process and quick disbursals. Tata Capital provides personal loans up to ₹35 lakhs with interest rates starting at 11.99% per annum, featuring minimal documentation and quick disbursal. IndusInd Bank offers personal loans up to ₹5 lakhs with interest rates starting from 10.49% per annum, with benefits like no collateral requirement and instant approvals. When considering a personal loan in Indore, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, ICICI Bank offers personal loans with interest rates ranging from 10.85% to 16.65% per annum, along with processing charges up to 2% of the loan amount plus applicable taxes. HDFC Bank provides personal loans up to ₹40 lakhs, with interest rates varying based on the applicant's profile. Piramal Finance offers personal loans up to ₹10 lakhs with interest rates starting at 12.99% per annum, featuring a hassle-free documentation process and quick disbursal. Additionally, Airtel Finance offers personal loans up to ₹9 lakhs with interest rates starting at 12% per annum, with quick approval and disbursal within 24 hours. It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([Piramal Finance][1])",
    },
    Lucknow: {
      image:"https://a.storyblok.com/f/159922/1140x360/daf23c418b/lucknow-1140x360.jpg/m/",
      content:"If you're exploring personal loan options in Lucknow, several banks and financial institutions offer competitive interest rates and flexible terms to cater to diverse financial needs. For instance, Tata Capital provides personal loans up to ₹35 lakhs with interest rates starting at 11.99% per annum, featuring a 100% digital application process and minimal documentation requirements. Similarly, DBS Bank offers personal loans ranging from ₹25,000 to ₹15 lakhs with interest rates starting at 10.99% per annum, offering a completely paperless application process and quick disbursals. Hero FinCorp provides personal loans up to ₹5 lakhs with interest rates starting at 1.58% per month, featuring instant approval and minimal eligibility criteria. IndusInd Bank offers personal loans with interest rates starting from 10.49% per annum, with benefits like no collateral requirement and instant approvals. When considering a personal loan in Lucknow, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, Axis Bank offers personal loans up to ₹40 lakhs with interest rates ranging from 11.25% to 22% per annum, along with swift processing and minimal paperwork. HSBC provides personal loans with interest rates ranging from 8.6% to 16.39% per annum, offering flexible repayment options and transparent terms. SMFG India Credit offers personal loans up to ₹30 lakhs with interest rates starting at 13% per annum, featuring a 100% paperless application process and quick disbursal. It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([Axis Bank][1], [HSBC India][2], [SMFG India Credit][3])",
    },
    Varanasi:{
      image:"https://www.adotrip.com/public/images/city/master_images/5e3d297b595ae-Varanasi_Attractions.jpg",
      content:"If you're seeking a personal loan in Varanasi, several banks and financial institutions offer competitive interest rates and flexible terms to cater to diverse financial needs. For instance, Tata Capital provides personal loans ranging from ₹40,000 to ₹35 lakhs with interest rates starting at 11.99% per annum, featuring a 100% digital application process and flexible repayment tenures up to 6 years.  Similarly, Bandhan Bank offers personal loans between ₹50,000 and ₹25 lakhs with interest rates starting from 9.47% per annum for tenures over 3 years, along with faster loan processing and doorstep document pickup.  Bajaj Finserv provides personal loans up to ₹55 lakhs with interest rates starting from 10% per annum, offering quick approvals and disbursals within 24 hours. ([Tata Capital][1], [Bandhan Bank][2]) When considering a personal loan in Varanasi, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, Airtel Finance offers personal loans up to ₹9 lakhs with interest rates starting at 12.75% per annum, featuring a 100% online application process and credit disbursal within 24 hours.  SMFG India Credit provides personal loans up to ₹30 lakhs with interest rates starting at 13% per annum, offering a completely paperless application process and quick disbursals.  Bank of India offers personal loans up to ₹25 lakhs with interest rates starting at 10.85% per annum, featuring competitive processing charges and no prepayment penalty.  It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([Airtel][3], [BOI][4])",
    },
    Patna: {
      image:"https://content.r9cdn.net/rimg/dimg/f9/e4/73b8e1bc-lm-50366-16079f9e8be.jpg?width=1750&height=1000&xhint=2303&yhint=1530&crop=true",
      content:"If you're seeking a personal loan in Patna, several banks and financial institutions offer competitive interest rates and flexible terms to cater to diverse financial needs. For instance, Poonawalla Fincorp provides personal loans up to ₹50 lakhs with interest rates starting at 9.99% per annum, offering loan tenures ranging from 12 to 84 months and zero prepayment charges.  Similarly, Tata Capital offers personal loans ranging from ₹40,000 to ₹35 lakhs with interest rates starting at 11.99% per annum, featuring a 100% digital application process and flexible repayment tenure of up to 6 years.  Airtel Finance provides personal loans up to ₹9 lakhs with interest rates starting from 12% per annum, offering a 100% online application process and credit disbursal within 24 hours. ([Poonawalla Fincorp][1], [Tata Capital][2]) When considering a personal loan in Patna, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, the Bihar State Cooperative Bank offers personal loans with interest rates starting at 10.00% per annum for government employees and 11.50% per annum for general customers.  SMFG India Credit provides personal loans up to ₹30 lakhs with interest rates starting at 13% per annum, featuring a 100% paperless application process and quick disbursal.  Moneyview offers personal loans ranging from ₹5,000 to ₹5 lakhs with interest rates starting from 1.33% per month, providing a complete online process and quick disbursal.  It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([biharscb.co.in][3], [Moneyview][4])",
    },
    Noida: {
      image:"https://img.staticmb.com/mbcontent/images/uploads/2023/8/Noida-Authority-Online.jpg",
      content:"If you're seeking a personal loan in Noida, several banks and financial institutions offer competitive interest rates and flexible terms to cater to diverse financial needs. For instance, **Axis Bank** provides personal loans up to ₹40 lakhs with interest rates ranging from 11.25% to 22% per annum, offering swift processing and minimal paperwork . **SBI** offers personal loans up to ₹35 lakhs with interest rates starting from 10.30% per annum, featuring low processing charges and minimal documentation . **ICICI Bank** provides personal loans with interest rates between 10.85% and 16.65% per annum, along with processing charges up to 2% of the loan amount plus applicable taxes . **Kotak Mahindra Bank** offers personal loans with interest rates starting at 10.99% per annum .([Axis Bank][1], [SBI][2], [Kotak][3]) When considering a personal loan in Noida, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, **Airtel Finance** offers personal loans up to ₹9 lakhs with interest rates starting from 12% per annum, featuring a 100% online application process and credit disbursal within 24 hours . **Piramal Finance** provides personal loans up to ₹10 lakhs with interest rates starting at 12.99% per annum, offering quick approval and flexible repayment options . **Hero FinCorp** offers personal loans up to ₹5 lakhs with interest rates starting at 1.58% per month, featuring instant approval and minimal eligibility criteria . **DBS Bank** provides personal loans ranging from ₹25,000 to ₹15 lakhs with interest rates starting at 10.99% per annum, offering a completely paperless application process and quick disbursals . It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([Airtel][4], [Piramal Finance][5], [Hero FinCorp][6], [DBS Bank][7])",
    },
    Amritsar: {
      image:"https://media.audleytravel.com/-/media/images/home/indian-subcontinent/india/country-guides/walking-holidays-in-india/istock481499068_golden_temple_of_amritsar_800x2400.jpg?q=79&w=1920&h=640",
      content:"If you're seeking a personal loan in Amritsar, several banks and financial institutions offer competitive interest rates and flexible terms to cater to diverse financial needs. For instance, **Tata Capital** provides personal loans ranging from ₹40,000 to ₹35 lakhs with interest rates starting at 11.99% per annum, featuring a 100% digital application process and flexible repayment tenures up to 6 years.  Similarly, **Hero FinCorp** offers personal loans up to ₹5 lakhs with interest rates starting at 1.58% per month, featuring instant approval and minimal eligibility criteria.  **IndusInd Bank** provides personal loans up to ₹5 lakhs with interest rates starting at 10.49% per annum, offering a seamless application process with 100% digital application. ([Tata Capital][1], [Hero FinCorp][2], [indus-ind][3]) When considering a personal loan in Amritsar, it's essential to evaluate factors such as interest rates, processing fees, repayment tenure, and eligibility criteria. For example, **SMFG India Credit** offers personal loans up to ₹30 lakhs with interest rates starting at 13% per annum, featuring a 100% paperless application process and quick disbursal.  **Airtel Finance** provides personal loans up to ₹9 lakhs with interest rates starting from 12.75% per annum, offering a 100% online application process and credit disbursal within 24 hours.  **Bandhan Bank** offers personal loans between ₹50,000 and ₹25 lakhs with interest rates starting from 9.47% per annum for tenures over 3 years, along with faster loan processing and doorstep document pickup.  It's advisable to compare various lenders, assess your financial requirements, and choose a loan product that aligns with your repayment capacity and financial goals.([SMFG India Credit][4], [Airtel][5])",
    },
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Navbar placeholder */}
      <Navbar
        dropdownData={dropdownData}
        COLOR="#fff"
        Hover="home"
        TXTCOLOR="#"
      />

      {/* Hero Image */}
      <div className="relative">
        <img
          src={cityData[city]?.image}
          alt={`${city} cityscape`}
          className="w-full h-48 sm:h-64 md:h-80 lg:h-[60vh] object-cover"
        />
        
        {/* Hero Overlay */}
        <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-black bg-opacity-80 rounded-2xl p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">
                    Personal Loans In {city}
                  </h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-4 py-3 bg-[#18ADA5] text-white rounded-lg font-medium hover:bg-[#16958e] transition-colors">
                    Check Eligibility
                  </button>
                  <button className="px-4 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Apply for Loan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Loan Cards Section */}
      <div className="pt-20 sm:pt-24 lg:pt-32 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {Loans.map((loan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-[#18ADA5] p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <img 
                      src={loan.img} 
                      alt={loan.title}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{loan.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{loan.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Content Section */}
            <div className="lg:col-span-2 w-[50vw]">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Personal Loans In {city}
                </h2>
              </div>
              <div className="text-base sm:text-lg  text-gray-600 leading-relaxed mb-6">
                {cityData[city]?.content}
              </div>
              <div>
                <button className="bg-[#18ADA5] hover:bg-[#16958e] text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                  Get a Loan
                </button>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-1">
              <div className="bg-black bg-opacity-80 rounded-xl p-6 lg:p-8">
                <div className="text-white text-xl sm:text-2xl font-semibold mb-6">
                  <span>Need More Details?</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      placeholder="Name:"
                      className="w-full h-12 rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#18ADA5] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full h-12 rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#18ADA5] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="PANNumber"
                      value={formData.PANNumber}
                      onChange={handleChange}
                      placeholder="PAN Number:"
                      className="w-full h-12 rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#18ADA5] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number:"
                      className="w-full h-12 rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#18ADA5] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="Loan"
                      value={formData.Loan}
                      onChange={handleChange}
                      placeholder="Up to ₹10,00,000"
                      className="w-full h-12 rounded-md p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#18ADA5] focus:border-transparent"
                    />
                  </div>

                  <div className="flex justify-center pt-4">
                    <button
                      onClick={handleSubmit}
                      className="bg-[#18ADA5] hover:bg-[#16958e] text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors w-full sm:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <HowItWorks></HowItWorks>

      

                  <WhyChooseUs COLOR="#18ADA5" TXTCOLOR="#"></WhyChooseUs> {/* Add this line */}

      <Footer></Footer>
    </div>
  );
};

export default PersonalLoanCity;