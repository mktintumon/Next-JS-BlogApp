import { auth } from "@/lib/auth";
import styles from "./createBlog.module.css";
import CreateUserPost from "@/components/createUserPost/createUserPost";

const CreateBlog = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <CreateUserPost userId={session.user.id} />
      </div>
    </div>
  );
};

export default CreateBlog;
