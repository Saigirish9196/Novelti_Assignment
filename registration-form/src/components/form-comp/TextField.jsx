import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="container mb-2">
      <label htmlFor={field.name}>{label}</label>
      <Field
        
        className={`form-input form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}