import * as Yup from 'yup';

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address1: '',
    address2: '',
    state: '',
    country: '',
    zipCode: '',
    formData:new FormData(),
    photo: null,
  };


 export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required').min(5, 'Minimum 5 characters'),
    lastName: Yup.string().required('Last Name is required').min(5, 'Minimum 5 characters'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    mobile: Yup.string().required('Mobile is required'),
    state:Yup.string().required('state is required'),
    country:Yup.string().required('country is required'),
    address1: Yup.string().required('Address 1 is required'),
    zipCode: Yup.number().required('Zip Code is required'),
  });  




export default initialValues