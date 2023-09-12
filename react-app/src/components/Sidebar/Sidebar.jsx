import Advert from "../Advert/Advert"
import BoxPrise from "../BoxPrise/BoxPrise"

function Sidebar() {
    return (
        <div className="sidebar">
            <BoxPrise />
            <Advert />
        </div>
    )
}
export default Sidebar