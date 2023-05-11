// cssを読み込む
import { useState } from "react";


export const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/user/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
            const jsonResponse = await response.json();
            localStorage.setItem("token", jsonResponse.token);
            alert(jsonResponse.message);
        }
        catch (error) {
            alert("ユーザ登録失敗");
            console.log(error);
        }
    }



    return (
        <div>
            <h1>ログイン</h1>
            <form onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => {
                    setemail(e.target.value)
                }}
                    type="text" name="email" placeholder="メールアドレス" required />
                <input value={password} onChange={(e) => {
                    setpassword(e.target.value)
                }} type="text" name="password" placeholder="パスワード" required />
                <button>ログイン</button>
            </form>
        </div>
    )
}