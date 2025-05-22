import React, { useState } from "react";
import "./Form.component.css";

function Form({ isFormVisible, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    companySize: "",
    jobTitle: "",
    servicesRequired: [],
    otherServices: "",
    heardAboutUs: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    isLoading: false,
    success: false,
    error: null,
  });

  const services = [
    "Web Development",
    "Digital Marketing",
    "App Development",
    "AI/ML",
    "Hire Developers",
    "E-commerce Development",
  ];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceClick = (service) => {
    setFormData((prevState) => {
      const isSelected = prevState.servicesRequired.includes(service);

      const updatedServices = isSelected
        ? prevState.servicesRequired.filter((s) => s !== service)
        : [...prevState.servicesRequired, service];

      return { ...prevState, servicesRequired: updatedServices };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ isLoading: true, success: false, error: null });

    try {
      const googleSheetsScriptUrl =
        "https://script.google.com/macros/s/AKfycbx3ZPTdWCI5XP4Gynyek1HJvhKYjAQ4o-CQbUQqe3XotlHSH7z928sPf_sex3j7ZG1dfQ/exec";

      const response = await fetch(googleSheetsScriptUrl, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setSubmitStatus({
        isLoading: false,
        success: true,
        error: null,
      });
      setFormData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        companyName: "",
        companySize: "",
        jobTitle: "",
        servicesRequired: [],
        otherServices: "",
        heardAboutUs: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        isLoading: false,
        success: false,
        error: error.message || "Submission failed",
      });
    }
  };

  if (!isFormVisible) return null;

  return (
    <>
      {
        <div
          className="form_bg_container"
          style={{ display: isFormVisible ? "flex" : "none" }}
          onClick={onClose}
        >
          <div className="form-container" onClick={(e) => e.stopPropagation()}>
            <button
              style={{
                background: "#fff",
                display: "flex",
                justifyContent: "end",
              }}
              onClick={onClose}
            >
              x
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h2 style={{ margin: "0" }}>Let’s get started!</h2>{" "}
            </div>
            <p>Please fill the details below</p>
            <div className="form-group">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group-company">
                    <label>
                      Name: <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{border:"1px solid black"}}
                      required
                    />
                  </div>
                  
                </div>
                <div className="form-row">
                  <div className="form-group-company">
                    <label>
                      DOB: <span style={{ color: "red" }}>*</span>
                    </label>
                    
                    <input
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      style={{border:"1px solid black"}}
                      required
                    />
                  </div>
                  
                </div>

                <div className="form-row">
                  <div className="form-group-company">
                    <label>
                      Pan No.: <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      style={{border:"1px solid black"}}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group-company">
                    <label>
                      Email: <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      style={{border:"1px solid black"}}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group-company">
                    <label>
                      Phone Number: <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      style={{border:"1px solid black"}}
                      required
                    />
                  </div>
                </div>

                <div className="w-full flex justify-center mt-5">

                <button
                  type="submit"
                  className="submit-button center p-2 text-lg rounded-lg"
                  disabled={submitStatus.isLoading}
                  style={{backgroundColor:"#18ADA5"}}
                >
                  {submitStatus.isLoading ? "Submitting..." : "Submit"}
                </button>
                </div>

                {submitStatus.success && (
                  <div className="success-message">
                    Form submitted successfully!
                  </div>
                )}

                {submitStatus.error && (
                  <div className="error-message">{submitStatus.error}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Form;
