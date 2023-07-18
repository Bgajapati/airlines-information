import React from "react";
import { useDispatch } from "react-redux";

// Components
import { formSchema } from "./schema";

// Components
import Form from "../../../components/form";

// Services
import { addAirline } from "../../../../services/airlines/actions";

const AirlineDetailsForms = ({ initialFormData }) => {
  const dispatch = useDispatch();

  // Handler
  const handleSubmission = (val) => {
    const payload = { ...val };
    dispatch(addAirline(payload));
  };

  return (
    <Form
      className="airline-information-form"
      defaultValue={initialFormData}
      fields={formSchema}
      cbSubmit={handleSubmission}
    />
  );
};

export default AirlineDetailsForms;
