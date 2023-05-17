import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../utils/userAuth";

export const Update = () => {
    const params = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        document.title = "アイテム修正ページ";

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
            const response = await fetch(`https://mern-stack-backend-79bu.onrender.com/item/update/${params.id}`, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    title: title,
                    price: price,
                    image: image,
                    description: description,
                }),
            });
            console.log(response);
        } catch (error) {
            alert("アイテム修正失敗");
            console.log(error);
        }
    }

    const loginUser = useAuth();
    if (loginUser === email) {


        return (
            <div>
                <h1 className="page-title">アイテム修正</h1>

                <form onSubmit={handleSubmit}>
                    <input
                        value={title} onChange={(e) => setTitle(e.target.value)}
                        type="text" name="title" placeholder="アイテム名" required />
                    <input
                        value={price} onChange={(e) => setPrice(e.target.value)}
                        type="text" name="price" placeholder="アイテム価格" required />
                    <input
                        value={image} onChange={(e) => setImage(e.target.value)}
                        type="text" name="image" placeholder="アイテム画像" required />
                    <textarea
                        value={description} onChange={(e) => setDescription(e.target.value)}
                        type="text" name="description" placeholder="アイテム説明" required />
                    <button>編集</button>
                </form>
            </div>
        );
    } else {
        return <h1>アイテム修正権限がありません</h1>
    }
};