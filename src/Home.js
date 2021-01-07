import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div class="text-center">
        <h1>The simplest way to keep notes</h1>

        <img
          src="https://simpleicon.com/wp-content/uploads/note.png"
          class="img-fluid"
          style={{ height: "300px" }}
        ></img>
        <div class="buttons buttons-home">
          {localStorage.getItem("userEmail") ? (
            <Link to="/addnotes" class="add-notes-btn">
              <button class="btn  btn-dark"> Add Note</button>{" "}
            </Link>
          ) : (
            <>
              <Link to="/login">
                <button type="button" class="btn btn-primary">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" class="btn btn-secondary">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
