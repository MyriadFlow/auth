import React from "react";

export default function ResetPasswordform() {
  return (
    <div>
      <div className="header">
        <div>
          <img className="dark" src="dark.svg"></img>
        </div>
        <div className="logo">Myriadflow</div>
      </div>
      <div className="reset">Reset your password</div>
      <div className="conferm-warpper">
        <div className="previous">previous password</div>
        <div className="mt-5">
          <input
            className="conferm-input"
            type="text"
            placeholder="previous password"
          ></input>
        </div>
        <div className="previous">New password</div>
        <div>
          <input
            className="conferm-input"
            type="text"
            placeholder="New password"
          ></input>
        </div>
        <div className="previous">Confirm password</div>
        <div>
          <input
            className="conferm-input"
            type="text"
            placeholder="Confirm password"
          ></input>
        </div>
        <div className="conferm-button-wrapper">
          <div>
            <button className="back-button">Back</button>
          </div>
          <div>
            <button className="back-button">Next</button>
          </div>
          <div>
            <button className="back-button">Cancle</button>
          </div>
        </div>
      </div>
    </div>
  );
}
