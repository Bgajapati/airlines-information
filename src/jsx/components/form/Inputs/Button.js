import React from "react";
import clsx from "clsx";

function Button({
  type = "submit",
  handleBlur,
  onClick,
  className,
  disabled,
  buttonText,
}) {
  return (
    <div
      className={clsx("form-control-container mb-3", {
        [className]: !!className,
      })}
    >
      <button
        type={type}
        onBlur={handleBlur}
        onClick={onClick}
        className={className}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Button;
