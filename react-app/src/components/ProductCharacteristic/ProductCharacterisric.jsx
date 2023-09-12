import "./ProductCharacteristic.css"

function ProductCharacteristic() {
    return (
        <div className="product-characteristic">
            {/* Характеристики айфона */}
            <h3 className="title">Характеристики товара</h3>
            <ul className="link link_padding">
                <li className="link__li">Экран: <b>6.1</b></li>
                <li className="link__li">Встроенная память: <b>128 ГБ</b></li>
                <li className="link__li">Операционная система: <b>iOS 15</b></li>
                <li className="link__li">Беспроводные интерфейсы: <b>NFC, Bluetooth, WI-FI</b></li>
                <li className="link__li">Процессор:
                    <a className="product-characteristic__a" href=" https://ru.wikipedia.org/wiki/Apple_A15 " target="_blank" >
                        <b> Apple A15 Bionic</b>
                    </a>
                </li>
                <li className="link__li">Вес: <b>173 г</b></li>
            </ul>
        </div >
    )
};

export default ProductCharacteristic