import React from "react";
const notes = [
  {
    title: "Title",
    description: "adgjlh bhkllgf bhjll bhkl",
  },
];

const Notes = (props) => {
  return (
    <div class="flex">
      <div class="fff">
        <h1>{props["id"]}</h1>
        <h2>{props["email"]}</h2>
        <h2>{props["first_name"]}</h2>
        <h2>{props["last_name"]}</h2>
      </div>
    </div>
  );
};

export default Notes;
