import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { createUseStyles } from "react-jss";

export default function Home() {
  const styles = useStyles();
  return (
    <>
      <NavBar />
      <div className={styles.row}>
        <SideBar />
        <div className={styles.col}>
          <h1>main</h1>
        </div>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  row: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  col: {
    width: "70%",
  },
});
