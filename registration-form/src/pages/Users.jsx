import { useEffect } from "react";
import UsersList from "../components/ReadUsers-data/User-list";
import { useNavigate } from "react-router-dom";


const UserReadData = () =>{
    const navigate = useNavigate();

    useEffect(()=>{
      const secretKey = localStorage.getItem('secretKey');
      if(!secretKey){
          navigate('/login')
      }

    },[])
    return (
        <div className="register-forms" >
            <UsersList/>            
        </div>
    )
}


export default UserReadData;