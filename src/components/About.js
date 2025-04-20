import React from "react";
import user from "../data/user";
import Links from "./Links"

function About({bio}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== "" ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
    </div>
  );
}

export default About;
