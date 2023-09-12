import ColorBtn from "../ColorBtn/ColorBtn"
import "./Colors.css"
import { useState } from 'react'

let colorsData =
    [{ value: "красный", alt: "Цвет товара: красный", src: "./images/color-1.webp", id: 1 },
    { value: "зеленый", alt: "Цвет товара: зелёный", src: "./images/color-2.webp", id: 2 },
    { value: "розовый", alt: "Цвет товара: розовый", src: "./images/color-3.webp", id: 3 },
    { value: "синий", alt: "Цвет товара: синий", src: "./images/color-4.webp", id: 4 },
    { value: "белый", alt: "Цвет товара: белый", src: "./images/color-5.webp", id: 5 },
    { value: "черный", alt: "Цвет товара: чёрный", src: "./images/color-6.webp", id: 6 }];

function Colors() {
    const [value, setValue] = useState(null);
    return (
        <div className="product-scu">
            <h3 className="title">Цвет товара: {value}</h3>
            <div className="btn-sku">
                {colorsData.map(item => <ColorBtn value={item.value} alt={item.alt} src={item.src} key={item.id} onChange={() => setValue(item.value)} />)}
            </div>
        </div>
    )

};

export default Colors
