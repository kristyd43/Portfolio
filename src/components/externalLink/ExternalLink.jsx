import React from "react";

const ExternalLink = () => {
  return (
    <div id="external-link">
      <h3 class="para">Find Me on LinkedIn and Github ~</h3>
      <div id="ex-container">
        <a
          href="https://www.linkedin.com/in/kristy-davidson-b86926215/"
          rel="noreferrer"
        >
          <button class="external-butt">LinkedIn</button>
        </a>
        <a id="git-butt" href="https://github.com/kristyd43" rel="noreferrer">
          <button class="external-butt">GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default ExternalLink;
