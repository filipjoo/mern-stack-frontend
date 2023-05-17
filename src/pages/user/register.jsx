// cssを読み込む
import { useState,useEffect } from "react";


export const Register = () => {    
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://mern-stack-backend-79bu.onrender.com/user/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: email,
                }),
            });
            
            const jsonResponse = await response.json();
            alert(jsonResponse.message);
            // reposeをストリーム形式からjson形式に変換

            console.log("登録成功");
        }
        catch (error) {
            alert("ユーザ登録失敗");
            console.log(error);
        }
    }
    useEffect(() => {
        document.title = "ユーザ登録ページ";
    }, []);


    return (
        <div>
            <h1 className="page-title">ユーザ登録ページ</h1>
            {/* ユーザ登録form作成。要素は、名前(name)、メールアドレス(email)、パスワード(password) */}
            <form onSubmit={handleSubmit}>
                <div>
                    <input value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        type="text" name="name" id="name" placeholder="名前" required />
                    <input value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                        type="text" name="email" id="email" placeholder="メールアドレス" required />
                    <input value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        type="text" name="password" id="password" placeholder="パスワード" required />
                    <button>登録</button>
                </div>
            </form>

        </div>
    );
};
