import React from "react";
import clsx from "clsx";

function RadioButtonField({
  label,
  name,
  value,
  onChange,
  error,
  options,
  handleBlur,
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
      {options.map((opt, index) => {
        return (
          <React.Fragment key={index}>
            <input
              type="radio"
              name={name}
              value={opt}
              checked={opt === value}
              onBlur={handleBlur}
              onChange={onChange}
              className={className}
            />
            {opt}
          </React.Fragment>
        );
      })}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default RadioButtonField;
