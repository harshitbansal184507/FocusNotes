import React from "react"
import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"

function logout(){
  localStorage.clear()
  return <Navigate to= "/login" />
}

function App() {

  return (
    <>
     
    </>
  )
}

export default App
