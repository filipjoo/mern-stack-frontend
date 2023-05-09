import { Route, Routes, BrowserRouter } from "react-router-dom"
import Register from "./pages/user/register"
import Login from "./pages/user/login"
import "./App.css"

const App = () => {
    return (
        <BrowserRouter>   
            <div>
            <Routes>
                <Route path="/user/register" element={<Register />} />  
                <Route path="/user/login" element={<Login />} />
            </Routes>   
            </div>       
        </BrowserRouter> 
    )
}

export default App