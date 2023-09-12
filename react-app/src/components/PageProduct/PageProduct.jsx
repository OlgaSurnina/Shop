import Memory from "../Memory/Memory";
import Breadcrumps from "../Breadcrumps/Breadcrumps";
import Colors from "../Colors/Colors";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Product from "../Product/Product";
import ProductAbout from "../ProductAbout/ProductAbout";
import ProductCharacteristic from "../ProductCharacteristic/ProductCharacterisric";
import ProductComparison from "../ProductComparison/ProductComparison";
import Sidebar from "../Sidebar/Sidebar";
import "./PageProduct.css"
import ProductReview from "../ProductReview/ProductReview";

function PageProduct() {

    return (
        <body className="page page--no-style">
            <div className="center style-text margin max-width">
                <Header />
                <main>
                    <Breadcrumps />
                    <div className="product">
                        <h2 prodId="Apple iPhone 13, синий" className="product__name">Смартфон Apple iPhone 13, синий </h2>
                        <Product />
                    </div>
                    <div className="content ">
                        <div className="content-left">
                            <Colors />
                            <Memory />
                            <ProductCharacteristic />
                            <ProductAbout />
                            <ProductComparison />
                            < ProductReview />
                        </div>
                        <Sidebar />
                    </div>
                </main>
            </div>
            <Footer />
        </body >
    )
};

export default PageProduct;

