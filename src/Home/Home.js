import React from "react";
import { createStore } from "redux";
import "./Home.css";

const init = { products: {} };

const counterReducer = (state = init, action) => {
    switch (action.type) {
        case "Add":
            const { id, name } = action.payload;
            const existing = state.products[id] || { name, quantity: 0 };
            return {
                ...state,
                products: {
                    ...state.products,
                    [id]: { ...existing, quantity: existing.quantity + 1 },
                },
            };
        default:
            return state;
    }
};

export const store = createStore(counterReducer);

function Home() {
    const products = [
        { id: "naushnik",  name: "Naushnik", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlpJt_lWltJF2e4-BvzIL8YRjjxRNbgI2eGA&s" },
        { id: "mishka",  name: "Mishka", img: "https://i5.walmartimages.com/seo/2-4G-Rechargeable-Wireless-Mouse-Gamer-Gaming-Computer-USB-Mause-RGB-Backlight-Mice-for-Laptop-PC_0c22bda9-d95c-48f7-a15d-b2b48078c060.5de9740e0b21ad16d02322b0245ab073.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" },
        { id: "telefon",  name: "Telefon", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMchhD5PovVSI_zkrri3rgtUUt5YiM8qjugA&s" }
    ];

    const addProduct = (id, name) => {
        store.dispatch({ type: "Add", payload: { id, name } })
    };

    return (
        <div>
            <h1>Bizdagi barcha narsalar:</h1>
            {products.map((product) => (
                <div key={product.id} className="box">
                    <img src={product.img} alt={product.name} />
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick={() => addProduct(product.id, product.name)}>Qushish</button>
                </div>
            ))}
        </div>
    );
}

export default Home;
