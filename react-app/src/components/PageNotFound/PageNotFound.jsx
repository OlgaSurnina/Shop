import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./PageNotFound.css"
import { Link } from "react-router-dom"
function PageNotFound() {
    return (
        <div className="page page--no-style">
            <div className="center style-text margin max-width">
                <Header />
                <main>
                    <div className="content-page">
                        <div className="content-text">
                            <h1> Ошибка 404</h1>
                            Кажется что то пошло не так! <br />Страница, которую вы запрашиваете, не существует.<br />
                            Возможно она устарела, была удалена или был введен неверный адрес в адресной строке.
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
export default PageNotFound