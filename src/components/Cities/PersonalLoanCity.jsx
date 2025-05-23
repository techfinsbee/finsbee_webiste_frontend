
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import { useState } from "react";
import WhyChooseUs from "../WhyChooseUs"; 
import HowItWorks from "./HowItWorks";
const PersonalLoanCity = ({city}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [formData, setFormData] = useState({
      Name: "",
      email: "",
      PANNumber: "",
      Loan: "",
      phoneNumber:""
    });

    const Loans = [{
      img:"/loan1.png",
      title:"Home Loan",
      content:"Home Loan"
    }]
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
    'Mumbai':{
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F7xZ48abwAAgNst.jpg/960px-F7xZ48abwAAgNst.jpg',
    content:'Mumbai - City of Dreams'
  }
}
  return (<>
  <div className="h-fit">
    <Navbar
        dropdownData={dropdownData}
        COLOR="#fff"
        Hover="home"
        TXTCOLOR="#"
      />
    <img src={`${cityData[city].image}`} alt="" className="h-[70vh] w-full " />
    <div className="flex justify-center">
        <div className="flex w-[95vw] bg-black h-[40vh] rounded-2xl relative -top-[23vh] bg-opacity-80">
          <div className="p-8 flex w-full" style={{justifyContent:"space-between"}}>
            <div>
              <span className="text-white font-bold text-4xl">Personal Loans In {city}</span>
            </div>
            <div className="flex gap-4">
              <div>
                <button className="p-4 bg-[#18ADA5] text-white rounded-lg" >Check Eligibility</button>
              </div>
              <div>
                <button className="bg-white p-4 rounded-lg">Apply for Loan</button>
              </div>
            </div>
          </div>
        </div>
    </div>  

    <div className="flex justify-center relative -top-[38vh]">
      <div className="flex relative justify-center w-full">
        <div className="flex w-[80%]" style={{justifyContent:"space-around"}}>
          {
            Loans.map((loan,index)=>{
              return(<div className="bg-white rounded-lg h-[30vh] w-[15vw]" style={{border:"1px solid #18ADA5"}}>
                <div className="p-4 flex flex-col justify-center items-center gap-4">
                <div><img src={loan.img} alt="" className=""/></div>
                <div><span className="text-lg font-bold">{loan.title}</span>
                <p className="text-md">{loan.content}</p></div>
                </div>
          </div>)
            })
          }
          
        </div>
      </div>
    </div>


    <div className="p-10 flex w-full relative -top-[30vh] justify-between">
      <div>
        <div>
          <span className="text-3xl font-bold">Personal Loans In {city}</span>
        </div>
        <div className="mt-5 text-xl font-semibold">{cityData[city].content}</div>
        <div>
          <button className="mt-5 text-xl bg-[#18ADA5] py-3 px-10 font-semibold text-white rounded-lg">Get a Loan</button>
        </div>
      </div> 

      <div className="flex flex-col w-[35vw] bg-black h-fit px-5 py-12 rounded-xl bg-opacity-80">

        <div className="form-head text-white text-2xl font-semibold">
          <span>Need More Details ?</span>
        </div>

        <div className="main-form mt-5">
          <div>
            
                    <input
                      type="text"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      style={{border:"1px solid black"}}
                      placeholder="Name:"
                      className="w-full h-[7vh] rounded-md my-2 p-3"
                      required
                    />
          </div>
          <div>
           
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{border:"1px solid black"}}
                      placeholder="Email"
                      className="w-full h-[7vh] rounded-md my-2 p-3"
                      required
                    />
          </div>
          <div>
            
                    <input
                      type="text"
                      name="PANNumber"
                      value={formData.PANNumber}
                      onChange={handleChange}
                      style={{border:"1px solid black"}}
                      placeholder="PAN Number:"
                      className="w-full h-[7vh] rounded-md my-2 p-3"
                      required
                    />
          </div>
          <div>
            
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      style={{border:"1px solid black"}}
                      placeholder="Phone Number:"
                      className="w-full h-[7vh] rounded-md my-2 p-3"
                      required
                    />
          </div>
          <div>
            
                    <input
                      type="text"
                      name="Loan"
                      value={formData.loan}
                      onChange={handleChange}
                      style={{border:"1px solid black"}}
                      placeholder="Upto *1,000,000"
                      className="w-full h-[7vh] rounded-md my-2 p-3"
                      required
                    />
          </div>

          <div className="w-full flex justify-center mt-5">
                <button
                  type="submit"
                  className="submit-button center p-2 text-lg rounded-lg w-[15vw]"
                  style={{backgroundColor:"#18ADA5"}}
                >Submit
                </button>
            </div>
        </div>
      </div>
    </div>
    <HowItWorks></HowItWorks>
    <div className="">
              <WhyChooseUs COLOR="#18ADA5" TXTCOLOR="#"></WhyChooseUs> {/* Add this line */}
    </div>
<Footer></Footer>

  </div>
</>);

}
export default PersonalLoanCity;
