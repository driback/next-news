import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

const Toolbar = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed")}>Feed</div>
      <div onClick={() => router.push("/eom")}>EOM</div>
      <div onClick={() => (window.location.href = "https://www.google.com")}>
        Twitter
      </div>
    </div>
  );
};

export default Toolbar;
