import React, { useEffect, useState } from "react";
import { store } from "../Home/Home";
import "./table.css"


function Table() {
    const [products, setProducts] = useState(store.getState().products);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setProducts(store.getState().products);
        });
        return () => unsubscribe();
    }, []);

    return (
        <>
            <h2>Mahsulotlar royxati:</h2>
        <div className="prodac">
            {Object.entries(products).map(([id, product]) => (
                <p key={id}>
                    {product.name}: {product.quantity} ta
                </p>
            ))}

        </div>
        </>
    );
}

export default Table;
