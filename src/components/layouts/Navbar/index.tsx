import Image from "next/image";
import styles from "./Navbar.module.scss";
import {signIn, signOut, useSession} from "next-auth/react";
import Script from "next/script";

const Navbar = () => {
    const {data} : any = useSession();
    console.log(data)
    return (
        <div className={styles.navbar}>
            <h1 id="navbar"></h1>
            {/* Merender setelah halaman di load, bagus untuk google analytics yang bisa render lama */}
            <Script strategy="lazyOnload">
                {`document.getElementById("navbar").innerHTML = "Navbar"`}
            </Script>
            {(data && data.user) ? 
            (
                <div className="flex">
                    {data?.user.image && <Image className={styles.navbar__image} src={data.user.image} alt={data.user.fullname} width={100} height={100}/>}
                    <p className="m-auto">{data.user.fullname}</p>
                    <button className="ml-2" onClick={() => signOut()}>Sign Out</button>
                </div>
            ) : 
            (<button onClick={() => signIn()}>Sign In</button>)}
        </div>
    )
}

export default Navbar;