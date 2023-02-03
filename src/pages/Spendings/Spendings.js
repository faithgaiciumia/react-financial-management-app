import { createUseStyles } from "react-jss";
import SideBar from "../../components/SideBar";

export default function Spendings() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.row}>
        <SideBar spendingsActive={true} />
        <div className={styles.main}>Hi am spendings page</div>
      </div>
    </>
  );
}

const useStyles = createUseStyles({
  row: {
    display: "flex",
  },
  main: {
    width: "100%",
  },
  mainRow: {
    display: "flex",
  },
  card: {
    borderRadius: "8px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    width: "48%",
    margin: "10px",
  },
});
