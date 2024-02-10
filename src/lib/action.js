"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { connectToDb } from "./connectToDb";


// ADD POST
export const addPost = async (prevState,formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userId , img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img
    });

    await newPost.save();
    console.log("Post saved to DB");
    revalidatePath("/blog");
    revalidatePath("/admin");
    return { success: "Blog added successfully!!!" };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


// DELETE POST
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("Post deleted from DB");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


// ADD USER
export const addUser = async (prevState,formData) => {
  const { username, email, password, img , isAdmin } = Object.fromEntries(formData);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password : hashedPassword,
      img,
      isAdmin
    });

    await newUser.save();
    console.log("User saved to DB");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


// DELETE USER AND THEIR POSTS
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("User and associated posts deleted from DB");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


// GITHUB LOGIN
export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};


// LOGOUT FUNCTION
export const handleLogout = async () => {
  "use server";
  await signOut();
};


// REGISTER USER
export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};



// LOGIN USER
export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};