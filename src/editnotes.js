import axios from "axios";
import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import { API_LINK } from "./API";
import Navbar from "./Navbar";

const Editnotes = (props) => {
  const history = useHistory();
  const [heading, changeHeading] = useState(props.location.state.heading);
  const [description, changeDescription] = useState(
    props.location.state.description
  );

  const handleNotesUpdate = (e) => {
    e.preventDefault();
    axios
      .post(`${API_LINK}/update/${props.location.state.id}`, {
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
    <>
      <Navbar />
      <form onSubmit={(e) => handleNotesUpdate(e)} class="form">
        <div class="mb-3">
          <label for="exampleInputheading" class="form-label">
            Heading
          </label>
          <input
            value={heading}
            onChange={(e) => changeHeading(e.target.value)}
            type="text"
            class="form-control"
            id="exampleInputheading"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Description
          </label>
          <div class="form-floating">
            <textarea
              value={description}
              onChange={(e) => changeDescription(e.target.value)}
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "150px" }}
            ></textarea>
            <label for="floatingTextarea2">Write a Description Here</label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Update Note
        </button>
      </form>
    </>
  );
};

export default withRouter(Editnotes);
