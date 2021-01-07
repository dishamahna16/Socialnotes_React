import React, { useEffect, useState } from "react";
import Note from "./note.js";
import axios from "axios";

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
  const [notes, changeNotes] = useState(notes_initial);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(function (response) {
        changeNotes(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });

  return (
    <div class="all_notes">
      {/* <Note
        userId={notes.userId}
        title={notes.title}
        completed={notes.completed}
      /> */}

      {notes.map((note) => {
        return (
          <Note
            id={note.id}
            email={note.email}
            first_name={note.first_name}
            last_name={note.last_name}
          />
        );
      })}
    </div>
  );
};

export default Notes;
