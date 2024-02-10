import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image
              src={post?.img}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={styles.img}
            />
          </div>
        )}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>
          {post.desc.length > 100 ? `${post.desc.slice(0, 100)}...` : post.desc}
        </p>
        <div className={styles.readmoredate}>
          <Link className={styles.link} href={`/blog/${post.slug}`}>
            READ MORE
          </Link>
          <span className={styles.date}>
            {post.createdAt?.toString().slice(0, 10)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
