import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export const useAuth = () => {
    const [LoginUser, setLoginUser] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate("/user/login")
        }

        try {
            const decoded = jwt_decode(token)
            console.log(decoded)
            const currentTime = Date.now() / 1000
            if (decoded.exp < currentTime) {
                localStorage.removeItem("token")
                navigate("/user/login")
            }
            setLoginUser(decoded.email)
        } catch (error) {
            localStorage.removeItem("token")
            navigate("/user/login")
        }
    },[navigate])

    return LoginUser
}