import React, { useState } from "react";

import { Link, withRouter } from "react-router-dom";

const Signup = (props) => {
  const [name, changeName] = useState("");
  const [mobile, changeMobile] = useState("");
  const [password, changePassword] = useState("");

  const [mobileError, changeMobileError] = useState("");

  var phoneno = /^\d{10}$/;

  const handleSignup = () => {
    console.log("SIGNUPP BUTTON CLICKED");

    // BACKEDNN OPERATION
    console.log(props);

    // props.history.push("/login");
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div class="flex">
      <div class="fff">
        <form>
          <input
            onChange={(e) => changeName(e.target.value)}
            class="name inputele"
            placeholder="Name"
          />
          <input
            onChange={(e) => changeMobile(e.target.value)}
            class="mobile inputele"
            placeholder="Mobile"
          />
          <div> {mobileError}</div>
          <input
            onChange={(e) => changePassword(e.target.value)}
            class="password inputele"
            placeholder="Password"
          />
          {/* <Link to="/login"> */}
          <button onClick={() => handleSignup()} class="btn" type="button">
            SIGN UP
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;
