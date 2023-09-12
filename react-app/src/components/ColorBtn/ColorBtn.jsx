import "./ColorBtn.css"

function ColorBtn(props) {
    return (
        <label className="btn-sku__radio">
            <input className="btn-sku__img"
                type="radio"
                name="btn-sku"
                value={props.value}
                onChange={props.onChange} />
            <img className="btn-sku__img-radio"
                src={props.src}
                alt={props.alt}


            />
        </label>)

}

export default ColorBtn