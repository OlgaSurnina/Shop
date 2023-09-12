import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./PageIndex.css"
import { Link } from "react-router-dom"
function PageIndex() {
    return (
        <div className="page page--no-style">
            <div className="center style-text margin max-width">
                <Header />
                <main>
                    <div className="content-page">
                        <div className="content-text">
                            Здесь должно быть содержимое главной страницы.<br />
                            Но в рамках курса главная страница используется лишь
                            в демонстрационных целях.<br />

                            <div className="content-links">
                                <Link className="links" to="/product">Перейти на страницу товара</Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div className="footer"><Footer /></div>
        </div >

    )
}
export default PageIndex