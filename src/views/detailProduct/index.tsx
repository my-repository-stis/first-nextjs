import { productType } from "@/types/productType";
import styles from "./DetailProduct.module.scss"
import Link from "next/link";
import Image from "next/image";

const DetailProduct = ({product} : {product: productType}) => {
    return(
        <>
            <h1 className={styles.title}>Detail Produk</h1>
            <div className={styles.productDetail}>
                <Link href={`/product/${product.id}`} className={styles.productDetail__item} key={product.id}>
                    <div className={styles.productDetail__item__image}>
                        {/* <img src={product.image && product.image} alt={product.name} /> */}
                        <Image src={product.image && product.image} alt={product.name} width={200} height={100}/>
                    </div>
                    <h4 className={styles.productDetail__item__name}>
                        {product.name}
                    </h4>
                    <p className={styles.productDetail__item__category}>
                        {product.category}
                    </p>
                    <p className={styles.productDetail__item__price}>
                        {product.price && product.price.toLocaleString("id-ID",{
                        style: "currency",
                        currency: "IDR",
                        })}
                    </p>
                </Link>
            </div>
        </>
    )
}

export default DetailProduct;