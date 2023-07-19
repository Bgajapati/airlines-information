export const formSchema = [
  {
    id: "email",
    label: "Email",
    placeholder: "Email",
    type: "email",
    validationType: "email",
    value: "",
    className: "form-control",
    validations: [
      {
        type: "required",
        params: ["Email is required"],
      },
      {
        type: "email",
        params: ["Email should be a valid format"],
      },
    ],
    disabled: true,
  },
  {
    id: "password",
    label: "Password",
    placeholder: "Password",
    type: "password",
    validationType: "string",
    value: "",
    className: "form-control",
    validations: [
      {
        type: "required",
        params: ["Password is required"],
      },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Number",
    placeholder: "Mobile Number",
    type: "text",
    validationType: "string",
    value: "",
    className: "form-control",
    validations: [
      {
        type: "required",
        params: ["Country is required"],
      },
    ],
  },

  {
    type: "button",
    buttonText: "Save",
    validationType: "string",
    className: "form-button",
  },
];
