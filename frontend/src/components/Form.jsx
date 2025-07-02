import { useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../api"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import "../styles/Form.css"

function Form({route , method}){   
     // route is the route which we want to go one we submit the form (token(login basically we'll collect token first) or register)  
     // method is telling whether we are registering or are we logging in
      const [username , setUsername]= useState("")
      const [password , setPassword]= useState("")
      const [loading ,setLoading ]= useState(false)
      const navigate = useNavigate()

      const formName = method === "login" ? "Login" : "Register"

      const handleSubmit=async(e)=>{ // here e is the event and wwe are preventing default behaviour off form , which is to reload page , bcz here we handl form submission with help of api  
        setLoading(true)
        e.preventDefault()

    try{
        const res = await api.post(route, {
            username,
            password
        })

        if(method === "login"){
            // if we are logging in then we will get access token and refresh token
            localStorage.setItem(ACCESS_TOKEN, res.data.accessToken)
            localStorage.setItem(REFRESH_TOKEN, res.data.refreshToken)
            navigate("/") 

        }
        else {
            navigate("/login") // if we are registering then we will redirect to login page
        }

    }
    catch(err){
        console.error("Error during form submission:", err)
        alert(err)
        
    }
    finally{
        setLoading(false)
    }
      }
      return (<form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-title">{formName}</h2>
        <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="Username" />

        <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password" />

        <button
        className="form-button"
        type="submit"
        >{formName}</button>
      </form>)

}
export default Form