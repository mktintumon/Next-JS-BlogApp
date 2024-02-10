import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>
            <Image
              src="/github.png"
              alt=""
              height={30}
              width={30}
              className={styles.img}
            />
            <h2>Login with Github</h2>
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
