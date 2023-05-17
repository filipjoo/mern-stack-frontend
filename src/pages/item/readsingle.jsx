import { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";

export const ReadSingle = () => {
    const params = useParams();
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Price, setPrice] = useState("");
    const [Image, setImage] = useState("");

    useEffect(() => {
        document.title = Title;

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
            }
        }
        getSingleItem();
    }, [params.id, Title]);

    return (
        <div className="grid-container-si">
            <div>
            {Image && <img src={Image} alt="item" />}
            </div>
            <div>
                <h1>{Title}</h1>
                <h2>\{Price}</h2>
                <hr />
                <p>{Description}</p>
                <div>
                    <Link to={`/item/update/${params.id}`}>アイテム編集</Link>
                    <Link to={`/item/delete/${params.id}`}>アイテム削除</Link>
                </div>
            </div>
        </div>
    );
};