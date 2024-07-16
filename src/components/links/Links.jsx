import React from "react";

export const Links = (props) => {
  return (
    <div>
      <h4>{props.linkHeading}</h4>
      <p>{props.link1}</p>
      <p>{props.link2}</p>
      <p>{props.link3}</p>
      <p>{props.link4}</p>
      <p>{props.link5}</p>
    </div>
  );
};
