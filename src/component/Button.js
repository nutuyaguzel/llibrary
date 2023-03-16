import React from "react";

const Button = ({
  text = "",
  className = "",
  style = {},
  type = "primary",
  onClick = () => {},
}) => {
  return (
    <button
      className={`btn btn-${type} ${className}`}
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
