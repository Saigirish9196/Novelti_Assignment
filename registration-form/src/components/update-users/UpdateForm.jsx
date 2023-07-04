import React, {  useEffect, useState } from 'react';
import { Formik, Form} from 'formik';
import "../registration-comp/form.style.css"
import MobileInput from '../form-comp/MobileForm';
import { TextField } from '../form-comp/TextField';
import  {errorMessage, validationSchema } from './intialValuesList';
import { updateForm } from '../../actionss/create-action';
import { useNavigate } from 'react-router-dom';
import CountrySelect from '../form-comp/Country';



const MyForm = () => {
  const [serverError, setServerError] = useState('');
  const user = JSON.parse(localStorage.getItem('user'))
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    sucess:"",
    error:""
  }) 
  
 
  useEffect(()=>{
    
    setPreviewImage(`${process.env.REACT_APP_API_URL}/photo/${user.slug}`)
    
  },[])
  
  const handleSubmit = (values,{ resetForm }) => {
    updateForm(user.slug,values).then(data =>{
        if(data.error){
          console.log(data.error.split(':')[2])
          setServerError(data.error);
          setFormData({...formData,error:true})
        }else{
        console.log(data)
        setFormData({...formData,sucess:true})
        setPreviewImage(null)
        resetForm();
        localStorage.removeItem('user');
        navigate('/users')
       }
       
      })

  };

  
  return (
    <>
      <div className="form-header">
          <h2>UpdateForm Form</h2>
        </div>
    
    <Formik className="registration-container" initialValues={user} validationSchema={validationSchema} onSubmit={handleSubmit}>
        
      {({handleChange, values,setFieldValue}) => (<Form className="form-container">
        
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
    </Formik>
    </>
  );
};

export default MyForm;



