
import { useField } from 'formik';
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const MobileInput = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
  
    const handleChange = (value) => {
      console.log(value)
      helpers.setValue(value);
    };
  
    return (
      <div className="container mb-2">
        <label htmlFor={field.name}>{label}</label>
        <PhoneInput
          country={'in'}
          value={field.value}
          onChange={handleChange}
          {...props}
        />
        {meta.touched && meta.error && <div className="error">{meta.error}</div>}
      </div>
    );
  };


  export default MobileInput