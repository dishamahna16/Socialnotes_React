import axios from "axios";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router";

const Editnotes = (props) => {
  const history = useHistory();
  const [heading, changeHeading] = useState(props.location.state.heading);
  const [description, changeDescription] = useState(
    props.location.state.description
  );

  //   const handleAddnotes = () => {
  //     console.log("UPLOAD BUTTON CLICKED");

  //     axios
  //       .post("http://localhost:8001/addnotes", {
  //         heading: heading,
  //         description: description,
  //         userEmail: "disha@gmail.com",
  //       })
  //       .then((response) => {
  //         console.log(response);
  //         if (response.data.addnotesSuccess == true) {
  //           alert("Successfully Added Notes");
  //           history.push("/notes");
  //         } else {
  //           alert("Added Notes Failed");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });

  //     // console.log(heading, description);
  //   };

  const handleNotesUpdate = () => {
    axios
      .post(`http://localhost:8001/update/${props.location.state.id}`, {
        description: description,
        heading: heading,
      })
      .then((response) => {
        console.log(response);
        alert("Successully Edited");
        history.push("/notes");
      })
      .catch((err) => {
        console.log(err);
        alert("Edition Failed");
      });
  };

  return (
    <div class="flex">
      <div class="fff">
        <form>
          <input
            value={heading}
            onChange={(e) => changeHeading(e.target.value)}
            class="mobile inputele"
            placeholder="Heading"
          />
          <textarea
            value={description}
            onChange={(e) => changeDescription(e.target.value)}
            class="password inputele textarea"
            placeholder="Descprition"
          ></textarea>

          {/*<Link to="/notes">*/}
          <button onClick={() => handleNotesUpdate()} class="btn" type="button">
            UPDATE
          </button>
          {/*</Link>*/}
        </form>
      </div>
    </div>
  );
};

export default withRouter(Editnotes);
