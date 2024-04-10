import React from 'react';
import productData from "../../content";
import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import "./Body.scss";

export default function App() {
    const items = productData[0].results;
    if (!items || items.length === 0) {
        return <div>No hay datos disponibles</div>;
    }

    return (
        <div className='App'>
            {items.map((content) => (
                <div className='productList' key={content.id}>
                    <div className='productCard'>
                        <img src={content.image} alt='product-img' className='productImage' />
                        <div className='productCard__content'>
                            <h3 className='productName'>{content.name}</h3>
                            <div className='displayStack__1'>
                                <div className='productPrice'>{content.species}</div>
                                <div className='productSales'>{content.status}</div>
                            </div>
                            <div className='displayStack__2'>
                                <div className='productTime'>{content.timeLeft}</div>
                            </div>
                            <button className='productButton' onClick={() => window.location.href = content.url}>
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}