import React from "react";
import clsx from "clsx";

function SelectField({
  label,
  name,
  value,
  handleBlur,
  onChange,
  options = [],
  error,
  touched,
  className,
  multiple,
}) {
  return (
    <div
      className={clsx("form-control-container", {
        "form-control-container-error": error,
      })}
    >
      <label className="form-label">{label}</label>
      <select
        name={name}
        defaultValue={value}
        onBlur={handleBlur}
        onChange={onChange}
        className={className}
        multiple={multiple}
      >
        <option value={""}>Select..</option>
        {options &&
          options.map((opt, index) => {
            return (
              <option
                key={`${index}${opt.displayName}`}
                value={opt.id}
                selected={opt.id === value}
              >
                {opt.displayName}
              </option>
            );
          })}
      </select>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default SelectField;
