import React from "react";
import clsx from "clsx";

function TextField({
  label,
  type = "email",
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
      className={clsx("form-control-container", "mb-3", {
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
      />
      <div className="form-control-note">
        Connected email address cannot be changed.
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default TextField;
