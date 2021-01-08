import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { API_LINK } from "./API";
import Navbar from "./Navbar";
const Addnotes = () => {
  const history = useHistory();
  const [heading, changeHeading] = useState("");
  const [description, changeDescription] = useState("");

  const handleAddnotes = (e) => {
    e.preventDefault();
    console.log("UPLOAD BUTTON CLICKED");

    axios
      .post(`${API_LINK}/addnotes`, {
        heading: heading,
        description: description,
        userEmail: localStorage.getItem("userEmail"),
      })
      .then((response) => {
        console.log(response);
        if (response.data.addnotesSuccess == true) {
          alert("Successfully Added Notes");
          history.push("/notes");
        } else {
          alert("Added Notes Failed");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(heading, description);
  };

  if (!localStorage.getItem("userEmail")) {
    return (
      <>
        {" "}
        <Navbar />
        <h3 class="text-center">Please Login To add a Note</h3>{" "}
      </>
    );
  }

  return (
    <>
      <Navbar />
      <form onSubmit={(e) => handleAddnotes(e)} class="form">
        <div class="mb-3">
          <label for="exampleInputheading" class="form-label">
            Heading
          </label>
          <input
            required
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
              required
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
          Add Note
        </button>
      </form>
    </>
  );
};

export default Addnotes;
