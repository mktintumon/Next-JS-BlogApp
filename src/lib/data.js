import { unstable_noStore } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";


// ALL POSTS
export const getPosts = async()=>{
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts" , error)
    }
}


// SINGLE POST
export const getPost = async(slug)=>{
    try {
        connectToDb();
        const post = await Post.findOne({slug:slug});
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post" , error)
    }
}

// ALL USERS
export const getUsers = async()=>{
    try {
        connectToDb();
        const users = await User.find(id);
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users" , error)
    }
}

// SINGLE USER
export const getUser = async(id)=>{
    unstable_noStore() // stops caching so that i can show loading
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user" , error)
    }
}