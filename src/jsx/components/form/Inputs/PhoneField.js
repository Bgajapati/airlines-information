import React from "react";
import clsx from "clsx";

function TextField({
  label,
  type = "text",
  name,
  error,
  value,
  handleBlur,
  onChange,
  placeholder,
  touched,
  className,
}) {
  return (
    <div
      className={clsx("form-control-container", {
        "form-control-container-error": error,
      })}
    >
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={handleBlur}
        onChange={onChange}
        className={className}
        maxLength="10"
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default TextField;