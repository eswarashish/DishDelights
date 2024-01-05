
import GitHubProvider from 'next-auth/providers/github'
import  CredentialsProvider  from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"
export const options = {
providers: [
    GitHubProvider({
        profile(profile) {
            console.log("github" , profile)
            let userRole = "GitHub user";
            if(profile?.email=="ashish.171222@gmail.com"){
                userRole = "admin";
            }
            return{
                ...profile,
                role: userRole,
            }

        },
        clientId: process.env.GITHUB_ID ,
        clientSecret: process.env.GITHUB_SECRET ,
    }),

    GoogleProvider({
        profile(profile) {
            console.log("google" , profile)
            let userRole = "Google user";
            if(profile?.email=="ashish.171222@gmail.com"){
                userRole = "admin";
            }
            return{
                ...profile,
                id: profile.sub,
                role: userRole,
            }

        },
        clientId: process.env.GOOGLE_ID ,
        clientSecret: process.env.GOOGLE_SECRET ,
    }),
    // CredentialsProvider({
    //     name: "credentials",
    //     credentials:{},

    //     async authorize(credentials){
    //         const user ={id:1}
    //         return user;
    //     }
    // })
],
callbacks:{
 async jwt({token,user}){
    if(user) token.role = user.role
    return token
 },
 async session ({session, token}){
    if(session?.user) session.user.role =token.role
    return session
 },
 
},
session:{
    strategy:"jwt",
},
secret: process.env.NEXTAUTH_SECRET,
 pages:{
     signIn:"/",
     
}
};

