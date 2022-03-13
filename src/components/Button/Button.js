import React from "react";

const Button = (props) => {
  return (
    <button type="button" class="btn btn-outline-secondary">
      {props.title}
    </button>
  );
};

export default Button;
