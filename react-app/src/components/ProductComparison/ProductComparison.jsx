import styles from "./ProductComparison.module.css"
function ProductComparison() {
    return (
        <div className={styles.productComparison}>
            <h3 className={styles.title}>Сравнение моделей</h3>
            <table className={styles.modelComparison}>
                <thead className={styles.modelComparison__head}>
                    <tr className={styles.modelComparison__tr}>
                        <th className={styles.modelComparison__th}>Модель</th>
                        <th className={styles.modelComparison__th}>Вес</th>
                        <th className={styles.modelComparison__th}>Высота</th>
                        <th className={styles.modelComparison__th}>Ширина</th>
                        <th className={styles.modelComparison__th}>Толщина</th>
                        <th className={styles.modelComparison__th}>Чип</th>
                        <th className={styles.modelComparison__th}>Объём памяти</th>
                        <th className={styles.modelComparison__th}>Аккумулятор</th>
                    </tr>
                </thead>
                <tbody className={styles.modelComparison__body}>
                    <tr className={styles.modelComparison__tr}>
                        <td className={styles.modelComparison__td}>Iphone 11</td>
                        <td className={styles.modelComparison__td}>194 грамма</td>
                        <td className={styles.modelComparison__td}>150.9 мм</td>
                        <td className={styles.modelComparison__td}>75.7 мм</td>
                        <td className={styles.modelComparison__td}>8.3 мм</td>
                        <td className={styles.modelComparison__td}>А13 Bionic chip</td>
                        <td className={styles.modelComparison__td}>до 128 Гб</td>
                        <td className={styles.modelComparison__td}>до 17 часов</td>
                    </tr>
                    <tr className={styles.modelComparison__tr}>
                        <td className={styles.modelComparison__td}>Iphone 12</td>
                        <td className={styles.modelComparison__td}>164 грамма</td>
                        <td className={styles.modelComparison__td}>146.7 мм</td>
                        <td className={styles.modelComparison__td}>71.5 мм</td>
                        <td className={styles.modelComparison__td}>7.4 мм</td>
                        <td className={styles.modelComparison__td}>А14 Bionic chip</td>
                        <td className={styles.modelComparison__td}>до 256 Гб</td>
                        <td className={styles.modelComparison__td}>До 19 часов</td>
                    </tr>
                    <tr className={styles.modelComparison__tr}>
                        <td className={styles.modelComparison__td}>Iphone 13</td>
                        <td className={styles.modelComparison__td}>174 грамма</td>
                        <td className={styles.modelComparison__td}>146.7 мм</td>
                        <td className={styles.modelComparison__td}>71.5 мм</td>
                        <td className={styles.modelComparison__td}>7.65 мм</td>
                        <td className={styles.modelComparison__td}>А15 Bionic chip</td>
                        <td className={styles.modelComparison__td}>до 512 Гб</td>
                        <td className={styles.modelComparison__td}>До 19 часов</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ProductComparison