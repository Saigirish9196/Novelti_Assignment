import React, { useState } from 'react';
import { Formik, Form} from 'formik';
import "./form.style.css"
import initialValues, { validationSchema } from './validations/validation';
import { TextField } from '../form-comp/TextField';
import MobileInput from '../form-comp/MobileForm';
import { createRegister } from '../../actionss/create-action';
import { errorMessage } from '../update-users/intialValuesList';
import Svg from '../form-comp/Svg';
import CountrySelect from '../form-comp/Country';




const MyForm = () => {
  const [serverError, setServerError] = useState('');
  const [formData,setFormData] = useState({
    sucess:"",
    error:""
  })  

  const handleSubmit = (values,{ resetForm }) => {
    console.log(values);

    createRegister(values).then(data =>{
      if(data.error){
        setFormData({...formData,error:true})
        setServerError(data.error)
      }else{
      
      setFormData({...formData,sucess:true})
      setPreviewImage(null)
      resetForm();
     }

    })
  };
  

  const [previewImage, setPreviewImage] = useState(null);
  
 

  return (
    <>
    
    <div className="form-header">
          <h2>Registration Form</h2>
     </div>
    {formData.sucess && <Svg/>}
    {!formData.sucess && 
    <Formik className="registration-container" initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        
      {({handleChange, values,setFieldValue,errors,touched}) => (<Form className="form-container">
        
        <div className="form-group ">
          <TextField value={values.firstName} onChange={handleChange} label="First Name" name="firstName" type="text"  />
        </div>

        <div className="form-group ">
        <TextField value={values.lastName} onChange={handleChange} label="Last Name" name="lastName" type="text"  />
        </div>
        


        <div className="form-group">
        <TextField value={values.email} onChange={handleChange} label="Email" name="email" type="text"  />
        </div>

        <div className="form-group">
        <MobileInput  label="Mobile" name="mobile"   />
        </div>

        <div className="form-group">
          <TextField value={values.address1} onChange={handleChange} label="Address 1" name="address1" type="text"  />
        </div>

        <div className="form-group">
          <TextField value={values.address2} onChange={handleChange} label="Address 2" name="address2" type="text"  />
        </div>

        <div className="form-group">
          <CountrySelect values={values} handleChange={handleChange} 
                          setFieldValue={setFieldValue} 
          />
        </div>

        <div className="form-group">
            <TextField value={values.zipCode} onChange={handleChange} label="Zip Code" name="zipCode" type="text"  />
        </div>

        <div className="form-group">
          <label htmlFor="photo">Image</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={(event) => {
                setPreviewImage(URL.createObjectURL(event.currentTarget.files[0]));
                setFieldValue("photo", event.currentTarget.files[0]);
              }}
            className="form-input"
          />
        </div>

        {previewImage && (
          <div className="form-group">
            <label>Preview:</label>
            <img src={previewImage} alt="Preview" className="preview-image" />
          </div>
        )}

        {errorMessage(serverError,setServerError)}

        <button type="submit" className="submit-button">Submit</button>
      </Form>)}
    </Formik>}
    
    </>
  );
};

export default MyForm;



