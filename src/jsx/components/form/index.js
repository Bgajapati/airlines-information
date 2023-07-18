import "../../../scss/components/form.scss";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Fields from "./Inputs";
import clsx from "clsx";
import { createYupSchema } from "../../../utils/yupSchemaCreator";

function Form(props) {
  const { fields, cbSubmit, className, defaultValue } = props;
  const initialValues = {};

  fields &&
    fields.forEach((item) => {
      if (defaultValue && defaultValue[item.id]) {
        initialValues[item.id] = defaultValue[item.id] || "";
      } else {
        fields[item.id] = initialValues[item.id] || "";
      }
    });

  const yupSchema = fields && fields.reduce(createYupSchema, {});

  const validateSchema = yup.object().shape(yupSchema);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateSchema}
      onSubmit={cbSubmit}
    >
      {(formikProps) => (
        <form
          onSubmit={formikProps.handleSubmit}
          className={clsx(className, formikProps?.className)}
        >
          <Fields fields={fields} formikProps={formikProps} />
        </form>
      )}
    </Formik>
  );
}

export default Form;
