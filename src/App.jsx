import { Route, Routes, BrowserRouter } from "react-router-dom"
import { Register } from "./pages/user/register"
import { Login } from "./pages/user/login"
import { ReadAll } from "./pages/item/readAll"
import { ReadSingle } from "./pages/item/readsingle"
import { CreateItem } from "./pages/item/create"
import { Update } from "./pages/item/update"
import { Delete } from "./pages/item/delete"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
            </div>
            <div>
                <Routes>
                    <Route path="/user/register" element={<Register />} />
                    <Route path="/user/login" element={<Login />} />
                    <Route path="/" element={<ReadAll />} />
                    <Route path="/item/:id" element={<ReadSingle />} />
                    <Route path="/item/update/:id" element={<Update />} />
                    <Route path="/item/create" element={<CreateItem />} />
                    <Route path="/item/delete/:id" element={<Delete />} />
                    <Route path="*" element={<h1>Page Not Found</h1>} />
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default App