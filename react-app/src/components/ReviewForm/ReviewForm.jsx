import "./ReviewForm.css";
import { useState } from "react";

function ReviewForm() {
    let errorField = { name: null, rating: null };
    let [input, setInput] = useState(JSON.parse(localStorage.getItem("dataFormInput")));
    let [error, setError] = useState({ errorField });
    localStorage.setItem("dataFormInput", JSON.stringify(input));

    let handleSubmit = (event) => {
        event.preventDefault();

        if (input?.name.trim() === "") {
            setError({ ...error, name: "Вы забыли указать имя и фамилию" });
            return;
        }

        let nameLength = input?.name.trim().length;
        if (nameLength < 2) {
            setError({ ...error, name: "Имя не может быть короче 2-х символов" });
            return;
        }

        let rating = +input?.rating;
        if (isNaN(rating) || rating < 1 || rating > 5) {
            setError({ ...error, rating: "Оценка должна быть от 1 до 5" });
            return;
        }
        setInput({ name: "", rating: "", text: "" });
    };

    let handleInputName = (event) => {
        setInput({ ...input, name: event.target.value });
    };

    let handleInputRating = (event) => {
        setInput({ ...input, rating: event.target.value });
    };

    let handleFocusName = () => {
        setError({ ...errorField });
    };

    let handleFocusRating = () => {
        setError({ ...errorField });
    };

    let handleInputText = (event) => {
        setInput({ ...input, text: event.target.value });
    };

    return (
        <div className="product-review__content">
            <div className="product-review__content-right margin-form">
                <h4 className="review-post__title">
                    <b>Добавить свой отзыв</b>
                </h4>
                <form className="review-post" onSubmit={handleSubmit}>
                    <div className="review-post__input">
                        <div className="review-post__text-field">
                            <label className="review-post__label-name" for="name"></label>
                            <input
                                className="review-post__input-name"
                                type="text"
                                name="name"
                                placeholder="Имя и фамилия"
                                value={input?.name}
                                onInput={handleInputName}
                                onFocus={handleFocusName}
                            />
                            <div className={`error-name ${error.name ? "" : "hidden"}`}>
                                {error.name}
                            </div>
                        </div>
                        <div className="review-post__text-field">
                            <label className="review-post__label-rating" for="rating"></label>
                            <input
                                className="review-post__input-rating"
                                type="number"
                                name="rating"
                                placeholder="Оценка"
                                value={input?.rating}
                                onInput={handleInputRating}
                                onFocus={handleFocusRating}
                            />
                            <div className={`error-rating ${error.rating ? "" : "hidden"}`}>
                                {error.rating}
                            </div>
                        </div>
                    </div>
                    <div className="review-post__text">
                        <div className="review-post__text-field">
                            <label className="review-post__label-textarea" for="text"></label>
                            <textarea
                                className="review-post__textarea"
                                name="text"
                                placeholder="Текст отзыва"
                                value={input?.text}
                                onInput={handleInputText}
                            />
                        </div>
                        <button className="review-post__btn" type="submit">
                            Отправить отзыв
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReviewForm;
