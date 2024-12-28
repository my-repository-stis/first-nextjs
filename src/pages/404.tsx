import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
    return(
        <div className={`${styles.notFound} font-bold text-3xl`}>
            {/* <img src="/404.svg" className={styles.error__image} alt=""/> */}
            <Image src={"/404.svg"} alt="" width={500} height={500} className={styles.error__image}/>
        </div>
    )
}

export default Custom404;