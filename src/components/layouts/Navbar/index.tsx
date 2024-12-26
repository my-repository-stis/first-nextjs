import styles from "./Navbar.module.css";
import {signIn, signOut, useSession} from "next-auth/react";

const Navbar = () => {
    const {data} : any = useSession();
    console.log(data)
    return (
        <div className={styles.navbar}>
            <h1>Navbar</h1>
            {(data && data.fullname) ? 
            (<button onClick={() => signOut()}>data.fullname</button>) : 
            (<button onClick={() => signIn()}>Sign In</button>)}
        </div>
    )
}

export default Navbar;