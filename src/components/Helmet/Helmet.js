import React from "react";

const Helmet = (props) => {
  // Set the document title to reflect the Curtains website's page
  document.title = "Curtains  Website - " + props.title;

  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
