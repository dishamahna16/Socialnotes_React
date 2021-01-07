import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Navbar() {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();

    history.push("/");
    window.location.reload();
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Social Notes App
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {localStorage.getItem("userEmail") ? (
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/notes">
                  All Notes
                </Link>
              </li>
            ) : (
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>

                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to="/login"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>

          {localStorage.getItem("userEmail") ? (
            <div class="d-flex">
              <button
                onClick={() => handleLogout()}
                class="btn btn-light"
                type="submit"
              >
                Logout
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
