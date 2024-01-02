
import GitHubProvider from 'next-auth/providers/github'
import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
export const options = {
providers: [
    GitHubProvider({
        clientId: process.env.GITHUB_ID ,
        clientSecret: process.env.GITHUB_SECRET ,
    }),

    GoogleProvider({
        clientId: process.env.GOOGLE_ID ,
        clientSecret: process.env.GOOGLE_SECRET ,
    }),
    CredentialsProvider({
        name: "credentials",
        credentials:{},

        async authorize(credentials){
            const use ={id:1}
            return use;
        }
    })
],
session:{
    strategy:"jwt",
},
secret: process.env.NEXTAUTH_SECRET,
 pages:{
     signIn:"/",
}
};

