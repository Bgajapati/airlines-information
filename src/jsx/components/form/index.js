import "../../../scss/components/form.scss";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Fields from "./Inputs";
import clsx from "clsx";
import { createYupSchema } from "../../../utils/yupSchemaCreator";

function AirlineLoginForm(props) {
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

  const validationSchema = yup.object().shape(
    fields.reduce((schema, field) => {
      if (field.validationType && field.validations) {
        return {
          ...schema,
          ...createYupSchema({
            id: field.id,
            validationType: field.validationType,
            validations: field.validations,
          }),
        };
      }
      return schema;
    }, {}),
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
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

export default AirlineLoginForm;
