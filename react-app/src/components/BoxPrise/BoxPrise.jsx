import "./BoxPrise.css"
function BoxPrise() {
    return (
        <div className="box-price box-price--position">
            <div className="box-price__price-block">
                <div className="box-price__discount">
                    <div className="box-price__old-prise">
                        <nobr>75 990₽</nobr>
                    </div>
                    <div className="box-price__sale">-8%</div>
                    <div className="box-price__heart-form">
                        <form>
                            <label>
                                <input className="box-price__checkbox" type="checkbox" name="favorites" />
                                <svg className="box-price__heart-svg" width="30" height="30" viewBox="0 0 30 30" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z" />
                                </svg>
                            </label>
                        </form>
                    </div>
                </div>
                <div className="box-price__price">67 990₽</div>
            </div>
            <div className="box-price__delivery">
                <div>
                    <p>Самовывоз в четверг, 1 сентября — <b>бесплатно</b></p>
                    <p>Курьером в четверг, 1 сентября — <b>бесплатно</b></p>
                </div>
            </div>
            <button className="box-price__btn-cart" type="submit">Добавить в корзину</button>
        </div>
    )
} export default BoxPrise