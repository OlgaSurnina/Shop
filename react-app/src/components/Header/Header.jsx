import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="logotip">
                <Link className="links" to="/">
                    <div className="logotip-box">
                        <div className="logotip__img">

                            <svg
                                className="logotip__img-svg"
                                alt="Логотип Мобимаркет"
                                width="39"
                                height="44"
                                viewBox="0 0 39 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 12L1 43H37.5L34 12H4Z"
                                    fill="#9CCC65"
                                    stroke="#9CCC65"
                                />
                                <path d="M28.5 25.5H9.5V43H28.5V25.5Z" fill="#B71C1C" />
                                <path d="M9.5 43.5V25.5H28.5V43.5M9.5 43H28.5" stroke="#B71C1C" />
                                <path
                                    d="M17.5 27.5H11.5V43H17.5V27.5Z"
                                    fill="#FF5722"
                                    stroke="#FF5722"
                                />
                                <path d="M15.5 34.5H14.5V35.5H15.5V34.5Z" stroke="#B71C1C" />
                                <path
                                    d="M26.5 27.5H20.5V43H26.5V27.5Z"
                                    fill="#FF5722"
                                    stroke="#FF5722"
                                />
                                <path d="M23.5 34.5H22.5V35.5H23.5V34.5Z" stroke="#B71C1C" />
                                <circle cx="27" cy="17" r="2" fill="#2A6A27" />
                                <circle cx="11" cy="17" r="2" fill="#2A6A27" />
                                <path
                                    d="M11 17V12.5127C11 9.64354 12.2324 6.9126 14.3838 5.01431L14.6203 4.80559C17.3632 2.38543 21.515 2.51505 24.1016 5.10159V5.10159C25.9574 6.95741 27 9.47444 27 12.099V17"
                                    stroke="#388E3C"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>


                            <div className="logotip__txt">

                                <h1 style={{ color: "black" }}>
                                    <span className="logotip-text-color"> Моби</span>Маркет
                                </h1>

                            </div>
                        </div>


                    </div>
                </Link>
                <div>
                    <div className="logotip__select">
                        <svg
                            width="41"
                            height="35"
                            viewBox="0 0 28 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.78502 2.57269C5.17872 0.27474 9.04661 0.27474 11.4403 2.57269L14.0001 5.03017L16.56 2.57269C18.9537 0.27474 22.8216 0.27474 25.2154 2.57269C27.609 4.87064 27.609 8.5838 25.2154 10.8818L14.0001 21.6483L2.78502 10.8818C0.391321 8.5838 0.391321 4.87064 2.78502 2.57269ZM9.67253 4.26974C8.25515 2.90905 5.97018 2.90905 4.55278 4.26974C3.1354 5.63044 3.1354 7.82401 4.55278 9.18476L14.0001 18.2542L23.4476 9.18476C24.865 7.82401 24.865 5.63044 23.4476 4.26974C22.0302 2.90905 19.7452 2.90905 18.3279 4.26974L14.0001 8.42432L9.67253 4.26974Z"
                                fill="#f36223"
                            />
                        </svg>
                        <div className="logotip__select-sku">
                            <span>1</span>
                        </div>
                    </div>
                    <div className="logotip__basket">
                        <svg
                            width="41"
                            height="40"
                            viewBox="0 0 21 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.799683 0.839233H4.30233H5.12213L5.28291 1.61096L5.74024 3.80618H19.3431H20.5235L20.3295 4.924L19.2993 10.8579L19.16 11.66H18.3129H7.37647L7.80062 13.696H18.3129V15.616H6.98081H6.16101L6.00023 14.8443L3.93985 4.95445L4.92044 4.76618L3.93985 4.95445L3.48252 2.75923H0.799683V0.839233ZM6.14024 5.72618L6.97647 9.74005H17.4658L18.1626 5.72618H6.14024ZM9.6758 18.0054C9.6758 18.8889 8.9316 19.6034 8.01119 19.6034C7.09075 19.6034 6.34656 18.8889 6.34656 18.0054C6.34656 17.1218 7.09075 16.4261 8.01119 16.4261C8.9316 16.4261 9.6758 17.1218 9.6758 18.0054ZM16.2534 19.6034C17.1738 19.6034 17.918 18.8889 17.918 18.0054C17.918 17.1218 17.1738 16.4261 16.2534 16.4261C15.3329 16.4261 14.5887 17.1218 14.5887 18.0054C14.5887 18.8889 15.3329 19.6034 16.2534 19.6034Z"
                                fill="#F36223"
                            />
                        </svg>
                        <div className="logotip__basket-sku">
                            <span className="logotip__basket-nam">1</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
