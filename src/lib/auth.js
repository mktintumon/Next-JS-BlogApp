import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./connectToDb";
import { User } from "./models";


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  callbacks:{
    async signIn({user , account , profile}){
        console.log(user , account , profile);
        if(account.provider === "github"){
            connectToDb()

            try {
                const user = await User.findOne({email : profile.email});

                if(!user){
                    const newUser = new User({
                        username : profile.login,
                        email : profile.email,
                        img : profile.avatar_url
                    })

                    await newUser.save()
                }
            } catch (error) {
                console.log(error);
                return false;
            }
        }

        return true;
    }
  }
});
