import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../utils/userAuth";

export const Delete = () => {
    const params = useParams();
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Price, setPrice] = useState("");
    const [Image, setImage] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        document.title = "削除ページ";

        const getSingleItem = async () => {
            const response = await fetch(`https://mern-stack-backend-79bu.onrender.com/item/${params.id}`);
            console.log(`https://mern-stack-backend-79bu.onrender.com/item/${params.id}`);
            const jsonResponse = await response.json();
            console.log(jsonResponse.item);
            if (jsonResponse.item) {
                setTitle(jsonResponse.item.title);
                setDescription(jsonResponse.item.description);
                setPrice(jsonResponse.item.price);
                setImage(jsonResponse.item.image);
                setEmail(jsonResponse.item.email);
            }
        }
        getSingleItem();
    }, [params.id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://mern-stack-backend-79bu.onrender.com/item/delete/${params.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            });
            console.log(response);
        } catch (error) {
            alert("アイテム削除失敗");
            console.log(error);
        }
    }


    const loginUser = useAuth();
    if (loginUser === email) {
        return (
            <div>
                <div>
                    <h1 className="page-title">アイテム削除</h1>
                </div>
                <div>
                    {Image && <img src={Image} alt="item" />}
                </div>
                <div>
                    <h1>{Title}</h1>
                    <h2>\{Price}</h2>
                    <hr />
                    <p>{Description}</p>
                    <button onClick={handleSubmit}>削除</button>
                </div>
            </div>
        );
    } else {
        return <h1>アイテム修正権限がありません</h1>
    }
};