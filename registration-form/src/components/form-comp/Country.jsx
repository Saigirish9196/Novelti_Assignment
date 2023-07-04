import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { ErrorMessage } from 'formik';

import "../registration-comp/form.style.css"

const CountrySelect = ({ handleChange, values, setFieldValue }) => {
  const handleCountryChange = (val) => {
    handleChange({ target: { name: 'country', value: val } });
    setFieldValue('country', val);
  };

  const handleStateChange = (val) => {
    handleChange({ target: { name: 'state', value: val } });
    setFieldValue('state', val);
  };


  return (
    <div className="container mb-2">
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <CountryDropdown
          id="country"
          className="country-dropdown form-input form-control"
          value={values.country ? "":""}
          onChange={handleCountryChange}
          placeholder="Select Country"
          defaultOptionLabel={!values.country ? "select country":values.country}
        />
        <ErrorMessage name="country" component="div" className="error" />
      </div>

      <div className="form-group">
        <label htmlFor="state">State</label>
        <RegionDropdown
          id="state"
          className="region-dropdown form-input form-control"
          country={values.country}
          value={values.state}
          onChange={handleStateChange}
          placeholder="Select State"
          blankOptionLabel="Select State"
          defaultOptionLabel={!values.state ? "select state":values.state}
        />
        <ErrorMessage name="state" component="div" className="error" />
      </div>
    </div>
  );
};

export default CountrySelect;