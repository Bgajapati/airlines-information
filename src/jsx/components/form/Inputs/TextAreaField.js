import React from "react";
import clsx from "clsx";

function TextAreaField({
  label,
  name,
  error,
  value,
  onChange = () => {},
  handleBlur,
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
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={onChange}
        className={className}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default TextAreaField;
