import { useState, useEffect } from "react";
import { useAuth } from "../utils/userAuth";
import { ImgInput } from "../../components/imgInput";

export const CreateItem = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://mern-stack-backend-79bu.onrender.com/item/create", {
                method: "POST",
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
            alert("アイテム作成失敗");
            console.log(error);
        }
    }
    useEffect(() => {
        document.title = "アイテム作成ページ";
    }, []);

    const loginUser = useAuth();
    if (loginUser) {
        return (
            <div>
                <h1 className="page-title">アイテム作成</h1>

                <ImgInput setImage={setImage} />


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
                    <button>作成</button>
                </form>
            </div>
        );
    }
};