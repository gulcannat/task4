import React, { Component } from "react";

export default class UserLogin extends Component {
  changeAuthMode = () => {
    let email = document.querySelector(".input-email").value;
    let password = document.querySelector(".input-password").value;
    let azFinder = email.split("@")[1];
    let checkDomain = azFinder.split(".")[1];
    if (checkDomain !== "az") {
      alert(".az domein ile biten email daxil edin");
    }
    if (password.length < 8) {
      alert("Shifre 8 simvoldan az ola bilmez.");
    }
  };
  render() {
    return (
      <div className="form-container">
        <form>
          <div className="text-center">
            Already registered?{" "}
            <a
              className="link-primary"
              href="https://www.youtube.com/ShamoNaghiyev"
              target="_blank"
              rel="noreferrer"
            >
              Sign In
            </a>
          </div>
          <div className="form-email-container input-container">
            <img
              className="png-email icon"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/e-mail_1f4e7.png"
              alt="emailicon"
            ></img>
            <label className="label-email"> E-mail: </label>
            <input
              type="email"
              className="input-email input-field"
              placeholder="Enter e-mail"
            />
          </div>
          <div className="form-password-container input-container">
            <img
              className="png-password icon"
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/325/key_1f511.png"
              alt="passwordicon"
            ></img>
            <label className="label-password"> Password: </label>
            <input
              type="password"
              className="input-password input-field"
              placeholder="Create password"
            />
          </div>
          <div className="form-btn">
            <button type="submit" className="btn" onClick={this.changeAuthMode}>
              Qeydiyyat
            </button>
          </div>
        </form>
        <div id="err"> </div>
      </div>
    );
  }
}
