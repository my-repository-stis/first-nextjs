import { useRouter } from "next/router";
// import Navbar from "../Navbar";
import {Poppins} from "next/font/google";
import dynamic from "next/dynamic";

// untuk optimasi nextjs dengan memanggil navbar dengan lazyload
const Navbar = dynamic(() => import("../Navbar"));

type AppShellProps = {
    children: React.ReactNode
}

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["400","600"]
})

const disableNavbar = ['/auth/login', '/auth/register', '/404'];

const AppShell = (props : AppShellProps) => {
    const {children} = props;
    const {pathname} = useRouter();
    return (
        <main className={poppins.className}>
            {!disableNavbar.includes(pathname) && <Navbar/>}
            {children}
        </main>
    );
}

export default AppShell;