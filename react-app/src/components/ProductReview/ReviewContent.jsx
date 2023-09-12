let reviewData = [
    {
        userName: "Марк Г.",
        altImg: "Фото пользовалея Марк Г.",
        altStar: "Оценка отзыва пользовалея Марк Г.",
        userImg: "./images/review-1.jpeg",
        starRat: "./images/star-5.png",
        userExp: `менее месяца`,
        pros: `это мой первый айфон после после
    огромного количества телефонов на андроиде. всё плавно, чётко
    и красиво. довольно шустрое устройство. камера весьма
    неплохая, ширик тоже на высоте.`,
        minuses: `к самому устройству мало имеет
    отношение, но перенос данных с андроида - адская вещь) а если
    нужно переносить фото с компа, то это только через itunes,
    который урезает качество отографий исходное`,
        id: 1
    },

    {
        userName: "Валерий Коваленко",
        altImg: "Фото пользовалея Валерий Коваленко",
        altStar: "оценка отзыва пользовалея Валерий Коваленко",
        userImg: "./images/review-2.jpeg",
        starRat: "./images/star-4.png",
        userExp: `менее месяца`,
        pros: `OLED экран, Дизайн, Система камер,
    Шустрый А15, Заряд держит долго`,
        minuses: `Плохая ремонтопригодность`,
        id: 2
    },
];

function ReviewContent() {

    return (<div>
        {reviewData
            .map(item => (
                <div className="product-review__content">
                    <img
                        className="product-review__img"
                        src={item.userImg}
                        alt={item.altImg}
                    />
                    <div className="product-review__content-right">
                        <h4 className="product-review__user-name">{item.userName}</h4>
                        <img className="product-review__star"
                            src={item.starRat}
                            alt={item.altStar}
                        />
                        <p><b>Опыт использования:</b> {item.userExp}</p>
                        <p>
                            <b>Достоинства:</b><br />{item.pros}
                        </p>
                        <p><b>Недостатки:</b><br />{item.minuses}</p>
                    </div>
                </div>
            ))}
    </div>)
}
export default ReviewContent