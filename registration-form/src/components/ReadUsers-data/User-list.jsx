import React, { useEffect, useState } from "react";
import { usersData, usersDelete } from "../../actionss/create-action";
import "./users.style.css"; // Import the custom CSS file
import Card from "../Cards/Card";
import Avatar from "react-avatar";
import { useNavigate } from "react-router-dom";



const UsersList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [change,setChange] = useState(null)
  useEffect(() => {
    console.log("data")
    usersData().then((data) => {
      if (data.error) {
        console.log(data.error);
      }
      setUsers(data);
      setChange(null)
    });
  }, [change]);


  const handleUpdate = (userData) =>{
    console.log(userData)
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/update')

    
  }

  const handleDelete = (slug) => {
    const answer = window.confirm("Ary you want delete It ?")
    if(answer) {
      usersDelete(slug).then(data =>{
        if(data.error){
          console.log(data.error)
        }
        console.log(data)
        setChange(true)
      })
    }
        
  }

  return (
    <div className="users-container"> {/* Add container div */}
      {users.map((user) => (
        <div key={user._id} className="user-card card">
          <Avatar
            name={`${user.firstName} ${user.lastName}`}
            round
            src={`${process.env.REACT_APP_API_URL}/photo/${user.slug}`}
            size="200"
            className="user-photo"
          />
          <div className="card-body">
              <Card user={user} />
              <div className="button-container">
            {/* <Link to={`/users/${user._id}/edit`} className="update-button">Update</Link> */}
            <button className="update-button" onClick={() => handleUpdate(user)} >update</button>
            <button className="delete-button" onClick={() => handleDelete(user.slug)} >Delete</button>
        </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
