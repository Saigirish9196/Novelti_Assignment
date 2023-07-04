import { useEffect } from "react";
import MyForm from "../components/update-users/UpdateForm";
import { useNavigate } from "react-router-dom";



const Update= () => {
    const navigate = useNavigate();

    useEffect(()=>{
      const secretKey = localStorage.getItem('secretKey');
      if(!secretKey){
          navigate('/login')
      }

    },[])

    return (
      <>
      <section className='register-forms'>
          <MyForm/>
      </section>
      </>
    );
  };
export default Update;