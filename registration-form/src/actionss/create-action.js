import axios from "axios"

export const createRegister = async (user) => {
    return await axios.post(`http://localhost:5000/register`,user,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }}).then(response => response.data)
        .catch(error =>console.log(error))
}


export const usersData = async () => {
  return await axios.get(`${process.env.REACT_APP_API_URL}/read`)
      .then(response => response.data)
      .catch(error =>console.log(error))
}

export const usersDelete = async (slug) => {

  return await axios.delete(`${process.env.REACT_APP_API_URL}/delete/${slug}`)
      .then(response => response.data)
      .catch(error =>console.log(error))
}

export const updateForm = async (slug,user) => {
  return await axios.put(`${process.env.REACT_APP_API_URL}/update/${slug}`,user,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }}).then(response => response.data)
      .catch(error =>console.log(error))
}