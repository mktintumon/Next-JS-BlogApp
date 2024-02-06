import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
//import { getPosts } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("https://dummyjson.com/posts", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData();
  

  return (
    <div className={styles.container}>
      {posts.posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;