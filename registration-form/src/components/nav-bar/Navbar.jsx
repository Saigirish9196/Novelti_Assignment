import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Navigation = () => {
   const location = useLocation();
   const [secret,setSecret] = useState(false)
   const secretKey = localStorage.getItem('secretKey');
   const navigate = useNavigate()
   useEffect(() => {
    setSecret(!!secretKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]); 

  const handleChange = () => {
    localStorage.removeItem('secretKey');
    setSecret(false);
    navigate('/login')
    
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <NavLink className="navbar-brand" to="/">NOVELTI</NavLink>
          <Nav className="ms-auto">
            {secret && <NavLink className="nav-link" to="/">Home</NavLink>}
            {secret && <NavLink className ="nav-link" to="/users">Users</NavLink>}
            {secret ?<button className='nav-link' onClick={handleChange}>LogOut</button> :<NavLink className ="nav-link" to="/login">AdminLogin</NavLink>}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;