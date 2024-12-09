import Link from "next/link";
import styles from "./Register.module.scss";

const RegisterView = () => {
    return (
        <div className={styles.register}>
            <h1 className="big">Register Page</h1>
            <p>Sudah punya akun ? login <Link href={"/auth/login"}>disini</Link></p>
        </div>
    )
}

export default RegisterView;