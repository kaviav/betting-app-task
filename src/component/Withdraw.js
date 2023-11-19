import React from "react";
import FileUploader from "../component/FileUploader";
import "./Withdraw.css";

class Withdraw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "aadharcard",
      inputValue: "",
      uploadStatus: "Pending", // Initialize upload status as 'Pending'
    };
  }

  handleChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
      inputValue: "",
      uploadStatus: "Pending", // Reset the upload status when the selection changes
    });
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  validateInput = () => {
    const { selectedOption, inputValue } = this.state;
    if (selectedOption === "aadharcard" && inputValue.length !== 12) {
      return "Please Enter 12 Digits of Your Aadhar Card.";
    } else if (selectedOption === "pancard" && inputValue.length !== 10) {
      return "Please Enter 10 Digits of Your Pan Card.";
    }
    return "";
  };

  handleUploadStatus = (status) => {
    // Handle upload status here
    console.log("Upload Status:", status);

    // Update the upload status in state
    this.setState({
      uploadStatus: status ? "Completed" : "Pending",
    });
  };

  render() {
    const inputLabel =
      this.state.selectedOption === "aadharcard" ? "Aadhar Card" : "Pancard";
    const validationError = this.validateInput();

    return (
      <div className="container">
        <header className="text-center">
          <h3 id="titlewithdraw">Withdraw</h3>
        </header>
        <br />
        <br />
        <div className="row">
          <span id="statuslabel">
            KYC Status :
            <span id="statusform">
              {this.state.uploadStatus} {/* Display the upload status */}
            </span>
          </span>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <div className="form-floating">
              <select
                className="form-select"
                id="dropdown"
                aria-label="Identity Proof"
                required
                value={this.state.selectedOption}
                onChange={this.handleChange}
                style={{
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                <option value="aadharcard" id="options">
                  Aadhar Card
                </option>
                <option value="pancard" id="options">
                  Pancard
                </option>
              </select>
              <label htmlFor="floatingSelect" id="labelproof">
                Identity Proof <span style={{ color: "red" }}>*</span>{" "}
              </label>
            </div>
            <br />
            <div className="form-floating">
              <input
                id="inputidbox"
                type="text"
                className="form-control"
                onChange={this.handleInputChange}
                value={this.state.inputValue}
              />
              <label htmlFor="floatingInputValue" id="labelproof">
                {inputLabel}
              </label>
              {validationError && (
                <div className="invalid-feedback d-block">
                  {validationError}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6 document-uploaders">
            <div className="row">
              <div className="col-md-6 document-uploader">
                <FileUploader
                  label="Front Document"
                  onUploadStatus={this.handleUploadStatus}
                />
              </div>
              <div className="col-md-6 document-uploader">
                <FileUploader
                  label="Back Document"
                  onUploadStatus={this.handleUploadStatus}
                />
              </div>
              <br />
              <br />
            </div>
          </div>
          <div className="col-md-12 text-center mb-3">
            {" "}
            {/* Center align the button */}
            <button className="btn btn-danger" id="submitbtn">
              Submit
            </button>{" "}
            {/* Add 'btn-md' class for medium size */}
          </div>
        </div>
      </div>
    );
  }
}

export default Withdraw;
