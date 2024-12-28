import { useSession } from "next-auth/react";

const ProfilePage = () =>{
    const {data} : any = useSession();

    return(
        <>
            <h1>Halaman profil</h1>
            {data && data.user ? 
            <>
                <p>Email Anda : <b>{data.user.email}</b></p>
                <p>Fullname Anda : <b>{data.user.fullname}</b></p>
            </>
            :
                <p>Anda belum terautentikasi</p>
            }
        </>
    )
}

export default ProfilePage;