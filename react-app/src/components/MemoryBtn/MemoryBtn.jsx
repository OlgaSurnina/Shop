import "./MemoryBtn.css"
function MemoryBtn(props) {
    return (
        <label className="product-memory__label-btn" >
            <input className="product-memory__input-btn"
                type="radio"
                name="memory"
                value={props.value}
                onChange={props.onChange} />
            <div className="product-memory__radio-btn">{props.text}</div >
        </label >
    )

}
export default MemoryBtn