import React, { useState } from "react";
import "./Form.component.css";

function Form({ isFormVisible, onClose }) {
  const [formData, setFormData] = useState({
    Name: "",
    DOB: "",
    PANNumber: "",
    email: "",
    phoneNumber:""
  });

  const [submitStatus, setSubmitStatus] = useState({
    isLoading: false,
    success: false,
    error: null,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
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
                      name="Name"
                      value={formData.Name}
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
                      name="DOB"
                      value={formData.DOB}
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
                      name="PANNumber"
                      value={formData.PANNumber}
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
                      name="email"
                      value={formData.email}
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
                      type="number"
                      name="phoneNumber"
                      value={formData.phoneNumber}
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
                  style={{backgroundColor:"#ffc73c"}}
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
