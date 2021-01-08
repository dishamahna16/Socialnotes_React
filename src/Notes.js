import React, { useEffect, useState } from "react";
import Note from "./note.js";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";
import { API_LINK } from "./API.js";

var notes_initial = [
  {
    id: 1,
    email: "email1",
    first_name: "name 1",
    last_name: "sdfksdnf",
  },

  {
    id: 2,
    email: "email2",
    first_name: "name 2",
    last_name: "sdfksdnf",
  },
  {
    id: 3,
    email: "email 3",
    first_name: "name 3",
    last_name: "sdfksdnf",
  },
];

const Notes = () => {
  const [notes, changeNotes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_LINK}/notes`)
      .then((response) => {
        if (response) {
          changeNotes(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (!localStorage.getItem("userEmail")) {
    return (
      <>
        {" "}
        <Navbar />
        <h3 class="text-center">Please Login to see all the Notes</h3>{" "}
      </>
    );
  }

  if (typeof notes !== "object") {
    return (
      <>
        <Navbar />
        <h3 class="text-center">Add a note to show up here</h3>
        <Link to="/addnotes" class="add-notes-btn">
          <button class="btn  btn-dark"> Add Note</button>{" "}
        </Link>
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <div class="all_notes">
        {/* <Note
        userId={notes.userId}
        title={notes.title}
        completed={notes.completed}
      /> */}

        {notes.map((note) => {
          return (
            <Note
              heading={note.heading}
              description={note.description}
              id={note.id}
              userEmail={note.userEmail}
            />
          );
        })}
      </div>
      <Link to="/addnotes" class="add-notes-btn">
        <button class="btn  btn-dark"> Add Note</button>{" "}
      </Link>
    </div>
  );
};

export default Notes;
