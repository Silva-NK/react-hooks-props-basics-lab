import React from "react";
import user from "../data/user"; //Would not need this import if using commented code executions.
import Links from "./Links"

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== "" ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links // Following the commented changes on App.js
        github={user.links.github} // github={links.github}
        linkedin={user.links.linkedin} // linkedin={links.linkedin} 
      />
    </div>
  );
}

