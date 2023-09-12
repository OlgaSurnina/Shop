import "./Memory.css"
import MemoryBtn from "../MemoryBtn/MemoryBtn"
import { useState } from 'react'
let memoData = [
    { value: `128 Гб`, text: `128 ГБ`, id: 1 },
    { value: `256 Гб`, text: `256 ГБ`, id: 2 },
    { value: `512 Гб`, text: `512 ГБ`, id: 3 }];

function Memory() {
    const [value, setValue] = useState(null);
    return (
        <div className="product-memory">
            <h3 className="title">Конфигурация памяти: {value}</h3>
            <div className="btn-sku">
                {memoData.map(item => <MemoryBtn value={item.value} text={item.text} key={item.id} onChange={() => setValue(item.value)} />)}
            </div >
        </div>
    )
};

export default Memory