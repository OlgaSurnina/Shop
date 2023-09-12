import "./Adwert.css"
function Advert() {
    return (<>
        <p className="advert">Реклама</p>
        <div className="iframe">
            <iframe className="iframe__iframe-top iframe-style" src="./iframe.html" title="adwert" scrolling="no"></iframe>
            <iframe className="iframe__iframe-bottom iframe-style" src="./iframe.html" title="adwert" scrolling="no"></iframe>
        </div>
    </>

    )
}
export default Advert