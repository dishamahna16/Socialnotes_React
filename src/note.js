import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { API_LINK } from "./API";
const notes = [
  {
    title: "Title",
    description: "adgjlh bhkllgf bhjll bhkl",
  },
];

const handleDelete = (id) => {
  console.log();
  axios
    .post(`${API_LINK}/delete/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

const Notes = (props) => {
  return (
    <div class="card text-dark bg-light mb-3">
      <div class="card-header">{props["userEmail"]}</div>
      <div class="card-body">
        <h5 class="card-title">{props["heading"]}</h5>
        <p class="card-text">{props["description"]}</p>
      </div>
      {localStorage.getItem("userEmail") == props["userEmail"] ? (
        <div class="buttons">
          <Link
            class="edit-btn"
            to={{
              pathname: "/editnotes",
              state: {
                heading: props["heading"],
                description: props["description"],
                id: props["id"],
              },
            }}
          >
            <button type="button" class="btn btn-info btn-sm">
              EDIT
            </button>
          </Link>

          <button
            type="button"
            class="btn btn-danger btn-sm btn-delete"
            onClick={() => handleDelete(props["id"])}
          >
            DELETE
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Notes;
