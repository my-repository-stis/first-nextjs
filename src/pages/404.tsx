import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
    return(
        <div className={`${styles.notFound} font-bold text-3xl`}>
            <img src="/404.svg" className={styles.error__image} alt=""/>
        </div>
    )
}

export default Custom404;