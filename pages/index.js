import Toolbar from "../components/toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Your one stop shop for the ltest news article</h3>
      </div>
    </div>
  );
}
