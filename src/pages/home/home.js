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
        <div className={styles.main}>
          <div>
            <p>Kes 2000</p>
            <p>This Week's Spending</p>
          </div>
          <div>
            <p>chart</p>
          </div>
          <div>
            <p>Recent Spendings</p>
          </div>
          <div>
            <p>Recent Earnings</p>
          </div>
        </div>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  row: {
    display: "flex",
  },
  main: {
    backgroundColor: "rgba(198, 243, 202, 0.2)",
    width: "100%",
  },
});
