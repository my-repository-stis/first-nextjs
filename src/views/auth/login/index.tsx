import Link from "next/link";
import styles from "./Login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";
import { signIn } from "next-auth/react";

const LoginView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const {push, query} = useRouter();
    const callbackUrl : any = query.callbackUrl || "/";
    
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);
        try {
            const res = await signIn("credentials", {
                redirect : false,
                email : event.target.email.value,
                password : event.target.password.value,
                callbackUrl
            });

            if(!res?.error){
                setIsLoading(false);
                push(callbackUrl);
            }else{
                setIsLoading(false);
                setError("Email or password is incorrect");
            }
        } catch (error : any) {
            setIsLoading(false);
            setError("Email or password is incorrect");
        }
    }
    return (
        <div className={styles.login}>
            <h1 className={styles.login__title}>Login</h1>
            {error && <p className={styles.login__error}>{error}</p>}
            <div className={styles.login__form}>
                <form onSubmit={handleSubmit} className={styles.login__form__item}>
                    <label htmlFor="email" className={styles.login__form__item__label}>
                        Email
                    </label>
                    <input type="email" placeholder="email" name="email" id="email" className={styles.login__form__item__input}/>
                    <label htmlFor="password" className={styles.login__form__item__label}>
                        Password
                    </label>
                    <input type="password" placeholder="password" name="password" id="password" className={styles.login__form__item__input}/>
                    <button type="submit" className={styles.login__form__button} disabled={isLoading}>
                        {isLoading ? "Loading..." : "Login"}
                    </button>
                </form>
            <button className={styles.login__google} onClick={() => signIn("google", {
                redirect: false,
                callbackUrl,
            })}>Sign In with Google</button>
            </div>
            <p className={styles.login__link}>
                Don{"'"}t have an account ? Sign up <Link href="/auth/register">here</Link>
            </p>
        </div>
    );
};

export default LoginView;
