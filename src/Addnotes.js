import React, { useState } from "react";
import { Link } from "react-router-dom";
const Addnotes = () => {
  const [heading, changeHeading] = useState("");
  const [description, changeDescription] = useState("");

  const handleAddnotes = () => {
    console.log("UPLOAD BUTTON CLICKED");

    console.log(heading, description);
  };
  return (
    <div class="flex">
      <div class="fff">
        <form>
          <input
            onChange={(e) => changeHeading(e.target.value)}
            class="mobile inputele"
            placeholder="Heading"
          />
          <textarea
            onChange={(e) => changeDescription(e.target.value)}
            class="password inputele textarea"
            placeholder="Descprition"
          ></textarea>

          {/*<Link to="/notes">*/}
          <button onClick={() => handleAddnotes()} class="btn" type="button">
            UPLOAD
          </button>
          {/*</Link>*/}
        </form>
      </div>
    </div>
  );
};

export default Addnotes;
