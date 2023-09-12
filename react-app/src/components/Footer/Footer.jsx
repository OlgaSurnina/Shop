import { useCurrentDate } from "@kundinos/react-hooks"
import "./Footer.css";

function Footer() {
    const currentDate = useCurrentDate({ every: 5 * 1000 });
    console.log(useCurrentDate)
    // Получаем компоненты текущей даты
    const fullYear = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    return (
        <footer className="footer not-style padding-footer">
            <div className="footer__position ">
                <div className="footer__box margin max-width">
                    <div className="footer__contacts">

                        <p>
                            <b>
                                © ООО <span className="logotip-text-color">Моби</span>Маркет,
                                2018-{`${fullYear} `}
                                {`  ${hours}:${minutes}`}

                            </b>
                            <br />
                            Для уточнения информации звоните по номеру{" "}
                            <a className="contacts" href="tel:79000000000">
                                +7 900 000 0000
                            </a>
                            ,<br />а предложения по сотрудничеству отправляйте на почту
                            <a className="contacts" href="mailto:partner@mymarket.com">
                                {" "}
                                partner@mobimarket.com
                            </a>
                        </p>
                    </div>
                    <div className="footer__start-up">
                        <a className="contacts" href="#bc">
                            К началу страницы
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
