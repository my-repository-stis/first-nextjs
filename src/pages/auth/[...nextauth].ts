import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions : NextAuthOptions = {
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type : "credentials",
            name : "Credentials",
            credentials : {
                email:{
                    label : "Email",
                    type : "email",
                    placeholder : "Email"
                },
                password : {
                    label : "Password",
                    type : "password",
                    placeholder : "Password"
                },
                fullname : {
                    label : "Fullname",
                    type : "fullname",
                    placeholder : "fullname"
                }
            },

            async authorize(credentials) {
                const {email, password, fullname} = credentials as {
                    email : string,
                    password : string,
                    fullname : string
                };
                const user: any = {id : 1, email : email, password : password, fullname : fullname};
                if (user){
                    return user
                }else {
                    return null
                }
            }
        })
    ],
    callbacks : {
        jwt({token, account, user}){
            if(account?.provider === "credentials"){
                token.email = user.email;
            }
            return token;
        },
        async session({session, token} : any){
            if("email" in token){
                session.user.email = token.email;
            }
            return session
        }
    }
}

export default NextAuth(authOptions);