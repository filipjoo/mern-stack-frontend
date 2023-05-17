import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const ReadAll = () => {
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {

        document.title = "MERN Market";

        const getAllItems = async () => {
            const response = await fetch("https://mern-stack-backend-79bu.onrender.com/");
            const jsonResponse = await response.json();
            console.log(jsonResponse.allItems);
            setAllItems(jsonResponse.allItems);
        };
        getAllItems();
    }, []);

    return (
        <div>
            <div className="grid-container-in">
                {allItems && allItems.map(item =>
                    <Link to={`/item/${item._id}`} key={item._id}>
                        <img src={item.image} alt="item" />
                        <div className="texts-area">
                            <h2>\{item.price}</h2>
                            <h3>{item.title}</h3>
                            <p>{item.description.substring(0, 80)}...</p>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
};