"use client"

import { addPost } from "@/lib/action";
import styles from "./createUserPost.module.css";
import { useFormState } from "react-dom";

const createUserPost = ({userId}) => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h2>Add New Post</h2>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {state?.error}
      {state?.success}
    </form>
  );
};

export default createUserPost;