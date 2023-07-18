import React from "react";

// Input fields
import TextField from "./TextField";
import SelectField from "./SelectField";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import PhoneField from "./PhoneField";
import Button from "./Button";

const fieldMap = {
  text: TextField,
  select: SelectField,
  email: EmailField,
  password: PasswordField,
  phone: PhoneField,
  button: Button,
};

function Field({ fields, formikProps }) {
  const { errors, touched, values, handleBlur, handleChange, setFieldValue } =
    formikProps;

  const SubmitButtonField = fieldMap["button"];
  const generateDynamicFormField = () => {
    return fields.map((item, index) => {
      const Component = fieldMap[item.type];
      let error = errors.hasOwnProperty(item.id) && errors[item.id];
      if (!item.type) {
        return null;
      }

      return (
        <Component
          key={index}
          label={item.label}
          name={item.id}
          placeholder={item.placeholder}
          value={values[item.id]}
          options={item.options}
          touched={touched}
          error={error}
          handleBlur={handleBlur}
          onChange={handleChange}
          setFieldValue={setFieldValue}
          className={item.className}
          multiple={item.multiple}
          buttonText={item.buttonText}
        />
      );
    });
  };

  return <>{generateDynamicFormField()}</>;
}

export default Field;
