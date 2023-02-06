import { createUseStyles } from "react-jss";
import HeaderBar from "../../components/HeaderBar";
import SideBar from "../../components/SideBar";

export default function Predictions() {
  const styles = useStyles();
  return (
    <>
      <div className={styles.row}>
        <SideBar predictionsActive={true} />
        <div className={styles.main}>
          <HeaderBar title="Stats" />
          <div className={styles.masonryCont}>
            <div className={styles.collg}>
              <div className={styles.bordered}>
                <h1 className={styles.heading}>Monthly Cash Flow</h1>
              </div>
              <div className={styles.bordered}>
                <h1 className={styles.heading}>Spending Categories</h1>
              </div>
            </div>
            <div className={styles.colsm}>
              <div className={styles.bordered}>
                <h1 className={styles.heading}>Alerts</h1>
              </div>
            </div>
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
    width: "78%",
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
  masonryCont: {
    display: "flex",
    marginTop: "10px",
    marginLeft: "10px",
  },
  colsm: {
    width: "30%",
    marginLeft: "10px",
  },
  collg: {
    width: "75%",
  },
  bordered: {
    border: "0.5px solid rgba(0, 0, 0, 0.3)",
    borderRadius: "6px",
    padding: "15px",
    marginBottom: "10px",
  },
  heading:{
    fontFamily:"Poppins",
    fontSize:"18px"
  }
});
