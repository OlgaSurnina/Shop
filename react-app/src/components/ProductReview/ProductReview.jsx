import ReviewForm from "../ReviewForm/ReviewForm"
import "./ProductReview.css"
import ReviewContent from "./ReviewContent"
function ProductReview() {
    return (
        <div className="product-review">
            <div className="review-block">
                <div className="product-review__header">
                    <h3 className="title">Отзывы</h3>
                    <div><p className="product-review__amount"><b>425</b></p></div>
                </div>
            </div>
            <ReviewContent />
            <ReviewForm />
        </div>
    )
}
export default ProductReview