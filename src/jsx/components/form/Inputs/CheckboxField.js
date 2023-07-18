import React, { useState } from "react";
import clsx from "clsx";

function CheckboxField({
  label,
  name,
  options,
  handleBlur,
  setFieldValue,
  error,
  touched,
  className,
}) {
  const [checkedItems, setCheckedItems] = useState(new Map());

  const handleCheckItem = (e) => {
    const { name, value } = e.target;
    let items = new Map(checkedItems);
    if (checkedItems.has(name)) {
      items.delete(name);
    } else {
      items.set(name, value);
    }
    setCheckedItems(items);
    setFieldValue(name, Array.from(items.values()).toString());
  };

  return (
    <div
      className={clsx("form-control-container", "mb-3", {
        "form-control-container-error": error,
      })}
    >
      <label className="form-label">{label}</label>
      {options.map((opt, index) => {
        return (
          <React.Fragment key={index}>
            <input
              type="checkbox"
              name={name + "-" + index}
              value={opt}
              checked={checkedItems.get(`${name}-${index}`)}
              onBlur={handleBlur}
              onChange={handleCheckItem}
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

export default CheckboxField;
