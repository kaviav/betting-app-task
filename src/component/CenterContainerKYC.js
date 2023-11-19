import React from "react";
import "./CenterContainerKYC.css";

function CenterContainerKYC() {
  return (
    <div className="main">
      <div className="text-container">
        <br />
        <h1> KYC Policy </h1>
        <br />

        <p>
          {" "}
          When a user makes an aggregate lifetime total of deposits exceeding
          EUR 2000 or requests a withdrawal of any amount inside the
          https://Betzhub.co platform, then it is compulsory for them to perform
          a full KYC process. During this process, the user will have to input
          some basic details about themselves and then upload
          <br />
          <br />
          1. A copy of Government Issued Photo ID (in some cases front and back
          depending on the document) 2. A selfie of themselves holding the ID
          document 3. A bank statement/Utility Bill Once uploaded, the user will
          get a “Temporarily Approved” Status and the documents will now be on
          our side, and the “KYC Team” will have 24hrs to go over them and email
          the user about the outcome:
          <br />
          <br />
          - Approval - Rejection - More information needed – No change in Status
          When the user is on “Temporarily Approved” Status then
          <br />
          - They can use the platform normally - They cannot deposit more than
          EUR 500 in aggregate total - They cannot complete any withdrawal.
          <br />
          <br />
          Guideline for the “KYC Process” 1. Proof of ID a. Signature should be
          there in the document b. Country is not a Restricted Country: United
          States of America and its territories, France and its territories,
          Netherlands and its territories and countries that form the Kingdom of
          Netherlands including Bonaire, Sint Eustatius, Saba, Aruba, Curacao
          and Sint Maarten, Australia and its territories, United Kingdom of
          Great Britain, Northern Ireland, Spain. c. Full Name matches client’s
          name d. Document does not expire in the next 3 months e. Owner is over
          18 years of age
          <br />
          <br />
          2. Proof of Residence a. Bank Statement or Utility Bill b. Country is
          not a Restricted Country: United States of America and its
          territories, France and its territories, Netherlands and its
          territories and countries that form the Kingdom of Netherlands
          including Bonaire, Sint Eustatius, Saba, Aruba, Curacao and Sint
          Maarten, Australia and its territories, United Kingdom of Great
          Britain, Northern Ireland, Spain, and Cyprus. c. Full Name matches
          client’s name and is same as in proof of ID. d. Date of Issue: In the
          last 3 months
          <br />
          <br />
          3.Selfie with ID a. Holder is the same as in the ID document above b.
          ID document is the same as in “1”. Make sure photo/ID number is the
          same
          <br />
          <br />
          Notes on the “KYC Process”
          <br />
          1. When the KYC process is unsuccessful then the reason is documented
          and a support ticket is created in the system. The ticket number along
          with an explanation is communicated back to the user. 2. Once all
          proper documents are in our possession then the account gets approved.
          <br />
          “Other AML measures”
          <br />
          1. If a user has not passed full KYC then they cannot make additional
          deposits or withdrawals of any amount. 2. If a user has passed the KYC
          process successfully then a. There is a deposit limit per transaction
          (max EUR 2,000) b. Prior to any withdrawal there is a detailed
          algorithmic and manual check on the activity and balance of the user
          to see if the amount withdrawn is a result of proper activity in the
          platform. 3. Under no circumstances may a user transfer funds directly
          to another user.
          <br />
          <br />
          <br />
        </p>
      </div>
    </div>
  );
}

export default CenterContainerKYC;
