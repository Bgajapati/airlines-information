import React from "react";
import clsx from "clsx";

function HiddenField({ name, value, handleBlur, onChange, className }) {
  return (
    <input
      type="hidden"
      name={name}
      placeholder={placeholder}
      value={value}
      onBlur={handleBlur}
      onChange={onChange}
      className={className}
    />
  );
}

export default HiddenField;
