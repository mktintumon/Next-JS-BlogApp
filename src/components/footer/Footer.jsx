import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Mohit's Blog</div>
      <div className={styles.text}>
        Mohit creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;