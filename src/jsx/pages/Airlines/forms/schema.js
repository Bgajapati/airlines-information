export const formSchema = [
  {
    id: "id",
    label: "Airline Id",
    placeholder: "Id",
    type: "text",
    validationType: "number",
    value: "",
    className: "form-control",
    validations: [
      {
        type: "required",
        params: ["Id is required"],
      },
    ],
    disabled: true,
  },
  {
    id: "name",
    label: "Airline Name",
    placeholder: "Name",
    type: "text",
    validationType: "string",
    value: "",
    className: "form-control",
    validations: [
      {
        type: "required",
        params: ["Name is required"],
      },
    ],
  },
  {
    id: "country",
    label: "Airline Country",
    placeholder: "Country",
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
    id: "logo",
    label: "Airline Logo",
    placeholder: "Logo",
    type: "text",
    validationType: "string",
    value: "",
    className: "form-control",
    validations: [
      {
        type: "required",
        params: ["Logo is required"],
      },
    ],
  },
  {
    id: "slogan",
    label: "Airline Slogan",
    placeholder: "Slogan",
    type: "text",
    validationType: "string",
    value: "",
    className: "form-control",
    validations: [
      {
        type: "required",
        params: ["Slogan is required"],
      },
    ],
  },
  {
    id: "head_quaters",
    label: "Airline Head Quarters",
    placeholder: "Head Quarters",
    type: "text",
    validationType: "string",
    value: "",
    className: "form-control",
    validations: [
      {
        type: "required",
        params: ["Head Quarters is required"],
      },
    ],
  },
  {
    id: "website",
    label: "Airline Website",
    placeholder: "Website",
    type: "text",
    validationType: "string",
    value: "",
    className: "form-control",
    validations: [
      {
        type: "required",
        params: ["Website is required"],
      },
    ],
  },
  {
    id: "established",
    label: "Established",
    placeholder: "established",
    type: "text",
    validationType: "number",
    value: "",
    className: "form-control",
    validations: [
      {
        type: "required",
        params: ["Established is required"],
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
