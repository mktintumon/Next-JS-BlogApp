"use server"
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post } from "./models";



export const addPost = async(formData)=>{

    // const title = formData.get('title')
    // const desc = formData.get('desc')
    // const slug = formData.get('slug')
    // const userId = formData.get('userid')

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    console.log(title , desc , slug , userId);

    try {
        connectToDb();

        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })

        await newPost.save();
        revalidatePath("blog") // will not show cached data , reflects updates

        console.log("New Post saved to DB");
    } catch (error) {
        console.log(error);
    }
}


export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
  
    try {
      connectToDb();
  
      await Post.findByIdAndDelete(id);
      console.log("Post deleted from db");

      revalidatePath("/blog");
      //revalidatePath("/admin");

    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };