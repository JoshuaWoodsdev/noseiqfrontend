import React from "react";
//import "" from './appBackendTable';

const PerfumerTable = ({ attachment, name, bio }) => (
  <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
    <div className="tc">
      <img
        src={attachment}
        className="br-100 h3 w3 dib"
        alt={`Photo of ${name}`}
      />
      <h1 className="f4">{name}</h1>
      <hr className="mw3 bb bw1 b--black-10" />
    </div>
    <p className="lh-copy measure center f6 black-70">{bio}</p>
  </article>
);


export default PerfumerTable; 


